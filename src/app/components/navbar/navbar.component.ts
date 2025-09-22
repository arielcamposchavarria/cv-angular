// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })
// export class NavbarComponent {
//   menuAbierto = false;

//   toggleMenu() {
//     this.menuAbierto = !this.menuAbierto;
//   }
// }

import { Component, HostListener, AfterViewInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  menuAbierto = false;
  scrolled = false;
  activeId: 'inicio'|'sobre-mi'|'proyectos'|'habilidades'|'contacto' = 'inicio';

  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private ngZone: NgZone,
    public theme: ThemeService  
  ){
    this.isBrowser = isPlatformBrowser(platformId);
  }
  toggleTheme() {
    this.theme.toggle();
  }


  toggleMenu(){
    this.menuAbierto = !this.menuAbierto;
    if (!this.isBrowser) return;
    // (opcional) bloquear scroll del fondo en móvil
    // document.body.style.overflow = this.menuAbierto ? 'hidden' : '';
  }

  goTo(id: string) {
  this.menuAbierto = false;
  if (!this.isBrowser) return;

  const el = document.getElementById(id);
  if (!el) return;

  const nav = document.querySelector('.navbar') as HTMLElement | null;
  const navH = (nav?.offsetHeight ?? 64) + 8; // margen extra
  const y = el.getBoundingClientRect().top + window.scrollY - navH;

  window.scrollTo({ top: y, behavior: 'smooth' });
}

  @HostListener('window:scroll')
  onScroll(){
    if (!this.isBrowser) return;
    this.scrolled = window.scrollY > 8;
  }

  ngAfterViewInit(){
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      const ids = ['inicio','sobre-mi','proyectos','habilidades', 'contacto'];
      const sections = ids
        .map(id => document.getElementById(id))
        .filter((s): s is HTMLElement => !!s);

      // Si no hay IO, no hacemos nada (evita errores en navegadores viejos)
      const hasIO = typeof window !== 'undefined' && 'IntersectionObserver' in window;
      if (!hasIO || sections.length === 0) return;

      const io = new IntersectionObserver((entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          // Volvemos a la zona de Angular solo para actualizar estado
          this.ngZone.run(() => {
            this.activeId = visible.target.id as any;
          });
        }
      }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, .25, .5, .75, 1] });

      sections.forEach(s => io.observe(s));
    });
  }
}
