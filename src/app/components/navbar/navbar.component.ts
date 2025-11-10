import {
  Component,
  HostListener,
  AfterViewInit,
  OnDestroy,
  Inject,
  NgZone,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [TranslateModule, CommonModule],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  menuAbierto = false;
  scrolled = false;
  activeId: 'inicio'|'sobre-mi'|'proyectos'|'habilidades'|'contacto' = 'inicio';
  currentLang: 'es'|'en'|'pt' = 'es';
  showLang = false;

  // 👇 mapas para renderizar bandera y código sin duplicaciones
  // flagMap: Record<'es'|'en'|'pt', string> = { es: '🇪🇸', en: '🇺🇸', pt: '🇧🇷' };
  // codeMap: Record<'es'|'en'|'pt', string> = { es: 'ES',  en: 'EN',  pt: 'PT' };
     flagMap: Record<'es'|'en'|'pt', string> = { es: '🇪🇸', en: '🇺🇸', pt: '🇧🇷' };
     private countryMap: Record<'es'|'en'|'pt', 'es'|'us'|'br'> = {
  es: 'es',
  en: 'us',
  pt: 'br',
};

// FlagCDN: tamaños disponibles (ej. 24x18, 32x24, 48x36, 64x48)
flagSrc(lang: 'es'|'en'|'pt') {
  const cc = this.countryMap[lang];
  return `https://flagcdn.com/24x18/${cc}.png`;
}

flagSrcSet(lang: 'es'|'en'|'pt') {
  const cc = this.countryMap[lang];
  return `
    https://flagcdn.com/24x18/${cc}.png 1x,
    https://flagcdn.com/48x36/${cc}.png 2x
  `;
}
  private isBrowser: boolean;
  private io?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private ngZone: NgZone,
    public theme: ThemeService,
    private i18n: TranslateService
  ){
    this.isBrowser = isPlatformBrowser(platformId);

    // Idioma inicial (SSR-safe)
    const saved = this.isBrowser ? (localStorage.getItem('lang') as 'es'|'en'|'pt' | null) : null;
    const browser = this.i18n.getBrowserLang();
    const detected = (browser && /^(es|en|pt)$/.test(browser)) ? (browser as 'es'|'en'|'pt') : 'es';
    this.currentLang = saved ?? detected;
    this.i18n.use(this.currentLang);
  }

  // ===== Tema =====
  toggleTheme() { this.theme.toggle(); }

  // ===== Idioma =====
  setLang(lang: 'es'|'en'|'pt') {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    this.i18n.use(lang);
    if (this.isBrowser) localStorage.setItem('lang', lang);
    this.menuAbierto = false;
    this.showLang = false;   // 👈 cierra el dropdown
  }

  // ===== Navegación / anclas =====
  toggleMenu(){ this.menuAbierto = !this.menuAbierto; }

  closeMenu(){ this.menuAbierto = false; }

  goTo(id: string) {
    this.menuAbierto = false;
    if (!this.isBrowser) return;

    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.querySelector('.navbar') as HTMLElement | null;
    const navH = (nav?.offsetHeight ?? 64) + 8;
    const y = el.getBoundingClientRect().top + window.scrollY - navH;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // Cerrar el dropdown al hacer click fuera o con ESC
  @HostListener('document:click', ['$event'])
  closeLangOnOutsideClick(ev: MouseEvent) {
    if (!this.showLang) return;
    const target = ev.target as HTMLElement;
    const container = target.closest('.lang-select');
    if (!container) this.showLang = false;
  }
  @HostListener('document:keydown.escape')
  closeLangOnEsc() {
    this.showLang = false;
    this.menuAbierto = false;
  }

  ngAfterViewInit(){
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      const ids = ['inicio','sobre-mi','proyectos','habilidades','contacto'];
      const sections = ids
        .map(id => document.getElementById(id))
        .filter((s): s is HTMLElement => !!s);

      if (!('IntersectionObserver' in window) || sections.length === 0) return;

      this.io = new IntersectionObserver((entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          this.ngZone.run(() => this.activeId = visible.target.id as any);
        }
      }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, .25, .5, .75, 1] });

      sections.forEach(s => this.io!.observe(s));
    });
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    this.io = undefined;
  }
}
