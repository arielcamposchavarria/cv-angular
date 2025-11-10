import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Tech { nombre: string; logo: string; descripcion?: string; }
type CategoryKey = 'frontend'|'backend'|'databases'|'tools'|'mobile'|'security';
interface Category { key: CategoryKey; tecnologias: Tech[]; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  // ------- datos -------
  skillsPorCategoria: Category[] = [
    {
      key: 'frontend',
      tecnologias: [
        { nombre: 'Angular',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { nombre: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { nombre: 'HTML',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nombre: 'CSS',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { nombre: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { nombre: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      key: 'backend',
      tecnologias: [
        { nombre: 'C#',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { nombre: '.NET',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
        { nombre: 'NestJS', logo: 'https://nestjs.com/img/logo-small.svg' },
        { nombre: 'NodeJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
        { nombre: 'Postman',logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
        { nombre: 'PHP',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
        { nombre: 'Laravel',logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg' }
      ]
    },
    {
      key: 'databases',
      tecnologias: [
        { nombre: 'MySQL',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { nombre: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
        { nombre: 'MariaDb',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original-wordmark.svg' }
      ]
    },
    {
      key: 'tools',
      tecnologias: [
        { nombre: 'Git',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { nombre: 'GitHub',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { nombre: 'Azure DevOps',logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg' },
        { nombre: 'Docker',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ]
    },
    {
      key: 'mobile',
      tecnologias: [
        { nombre: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { nombre: 'Dart',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' }
      ]
    },
    {
      key: 'security',
      tecnologias: [
        { nombre: 'Auth0',   logo: 'https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.png' },
        { nombre: 'Sanctum', logo: 'https://laravel.com/img/logomark.min.svg' },
        { nombre: 'JWT',     logo: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg' }
      ]
    }
  ];

  // ------- carrusel infinito -------
  flattened: Tech[] = [];
  autoScroll = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.flattened = this.skillsPorCategoria.flatMap(c => c.tecnologias);
  }

  toggleAutoScroll() {
    this.autoScroll = !this.autoScroll;
  }
}
