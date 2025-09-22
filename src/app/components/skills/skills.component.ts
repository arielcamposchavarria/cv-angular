import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Inject,
  NgZone,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Tech { nombre: string; logo: string; descripcion?: string; }
interface Category { categoria: string; tecnologias: Tech[]; }
interface Point3D { x: number; y: number; z: number; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  // ------- datos -------
  skillsPorCategoria: Category[] = [
    {
      categoria: 'Frontend',
      tecnologias: [
        { nombre: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { nombre: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { nombre: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nombre: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { nombre: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      categoria: 'Backend',
      tecnologias: [
        { nombre: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { nombre: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
        { nombre: 'NestJS', logo: 'https://nestjs.com/img/logo-small.svg' },
        //{ nombre: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { nombre: 'NodeJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
        { nombre: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
        { nombre: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
        { nombre: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg' }
      ]
    },
    {
      categoria: 'Bases de datos',
      tecnologias: [
        { nombre: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { nombre: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
        { nombre: 'MariaDb', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original-wordmark.svg' }
      ]
    },
    {
      categoria: 'Herramientas de desarrollo',
      tecnologias: [
        { nombre: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { nombre: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { nombre: 'Azure DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg' },
        { nombre: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ]
    },
    {
      categoria: 'Móvil',
      tecnologias: [
        { nombre: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { nombre: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' }
      ]
    }
  ];

  // ------- esfera 3D -------
  flattened: Tech[] = [];
  points: Point3D[] = [];
  Math = Math;               // para usar Math.round en el template

  radius = 200;              // radio (px)
  autoRotate = true;         // giro automático
  angleX = 0;                // rotación actual X (deg)
  angleY = 0;                // rotación actual Y (deg)

  private rafId?: number;    // id de requestAnimationFrame
  private lastTs = 0;        // timestamp previo
  private dragging = false;
  private lastX = 0;
  private lastY = 0;
  private velX = 0;          // inercia
  private velY = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // a) aplanar logos
    this.flattened = this.skillsPorCategoria.flatMap(c => c.tecnologias);
    // b) posiciones estilo “Fibonacci sphere”
    this.points = this.fibonacciSphere(this.flattened.length, this.radius);
    // c) NO iniciar animación aquí (para evitar SSR error)
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // correr la animación fuera de Angular para no triggerear CD
      this.ngZone.runOutsideAngular(() => {
        this.loop(0);
      });
    }
  }

  ngOnDestroy(): void {
    if (typeof cancelAnimationFrame !== 'undefined' && this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private loop = (ts: number) => {
    const dt = Math.min(32, ts - this.lastTs);
    this.lastTs = ts;

    // giro automático
    if (this.autoRotate && !this.dragging) {
      this.angleY += 0.02 * dt;
    }

    // inercia post-arrastre
    if (!this.dragging) {
      this.angleX += this.velX;
      this.angleY += this.velY;
      this.velX *= 0.95;
      this.velY *= 0.95;
      if (Math.abs(this.velX) < 0.001) this.velX = 0;
      if (Math.abs(this.velY) < 0.001) this.velY = 0;
    }

    // límites de inclinación en X
    this.angleX = Math.max(-80, Math.min(80, this.angleX));

    // agenda siguiente frame SOLO en navegador
    if (typeof requestAnimationFrame !== 'undefined') {
      this.rafId = requestAnimationFrame(this.loop);
    }
  };

  toggleAuto() { this.autoRotate = !this.autoRotate; }

  onPointerDown(e: PointerEvent) {
    this.dragging = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    this.autoRotate = false; // pausa auto-rotate al arrastrar
    this.velX = 0; this.velY = 0;
  }

  onPointerMove(e: PointerEvent) {
    if (!this.dragging) return;
    const dx = e.clientX - this.lastX;
    const dy = e.clientY - this.lastY;
    this.lastX = e.clientX;
    this.lastY = e.clientY;

    const k = 0.2; // sensibilidad
    this.angleY += dx * k;
    this.angleX -= dy * k;

    // inercia
    this.velY = dx * k * 0.05;
    this.velX = -dy * k * 0.05;
  }

  onPointerUp() {
    this.dragging = false;
    // Si quieres reanudar auto-rotate al soltar:
    // this.autoRotate = true;
  }

  // Distribución “Fibonacci sphere”
  private fibonacciSphere(n: number, r: number): Point3D[] {
    const pts: Point3D[] = [];
    if (n <= 1) return [{ x: 0, y: 0, z: 0 }];

    const phi = Math.PI * (3 - Math.sqrt(5)); // ángulo dorado
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2; // 1..-1
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      pts.push({ x: x * r, y: y * r, z: z * r });
    }
    return pts;
  }

  // Efecto de profundidad: logos al fondo más oscuros
  depthFilter(z: number) {
    const t = (z + this.radius) / (2 * this.radius); // 0..1
    const brightness = 0.75 + t * 0.3;               // 0.75..1.05 aprox
    return `brightness(${brightness})`;
  }
}
