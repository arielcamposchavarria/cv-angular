import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'] // <- corregido, antes decía "styleUrl"
})
export class SkillsComponent {
  skillsPorCategoria = [
    {
      categoria: 'Frontend',
      tecnologias: [
        {
          nombre: 'Angular',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
          descripcion: 'Angular 19.2.7 – Uso para el desarrollo de esta pagina con TypeScript.'
        },
        {
          nombre: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          descripcion: 'React (Vite, 18.3.1) + TypeScript – Uso en el desarrollo del proyecto Sistema ZMTMN.'
        },
        {
          nombre: 'HTML',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          descripcion: 'HTML5 – Uso en proyectos de practica.'
        },
        {
          nombre: 'CSS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          descripcion: 'CSS – Estilizado con Flexbox, Grid y SCSS.'
        },
        {
          nombre: 'TypeScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          descripcion: 'TypeScript – Tipado en proyectos Angular y React.'
        },
        {
          nombre: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          descripcion: 'JavaScript – Utilizado en Sistema ZMTMN y otros proyectos de prueba.'
        }
      ]
    },
    {
      categoria: 'Backend',
      tecnologias: [
        {
          nombre: 'C#',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
          descripcion: 'C# – Uso en proyecto de service bus y otros proyectos de prueba.'
        },
        {
          nombre: '.NET',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
          descripcion: '.NET 7 – Desarrollo de servicios web RESTful en proyectos de prueba.'
        },
        {
          nombre: 'NestJS',
          logo: 'https://nestjs.com/img/logo-small.svg',
          descripcion: 'NestJS – Desarrollo del Sistema ZMTMN y otros proyectos de prueba.'
        },
        {
          nombre: 'TypeScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          descripcion: 'TypeScript – Utilizado en Sistema ZMTMN y otros proyectos de prueba.'
        },
        {
          nombre: 'NodeJS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
          descripcion: 'NodeJS.'
        },
        {
          nombre: 'Postman',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
          descripcion: 'Postman - Utilizado para consultas API en entornos de prueba.'
        }
      ]
    },
    {
      categoria: 'Bases de datos',
      tecnologias: [
        {
          nombre: 'MySQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          descripcion: 'MySQL – Uso para el proyecto de taller y otros proyectos de prueba.'
        },
        {
          nombre: 'SQL Server',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
          descripcion: 'SQL Server – Gestor utilizado para el proyecto de taller y otros proyectos de prueba.'
        },
        {
          nombre: 'MariaDb',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original-wordmark.svg',
          descripcion: 'MariaDb – Gestor utilizado para el Sistema ZMTMN.'
        }

      ]
    },
    {
      categoria: 'Herramientas de desarrollo',
      tecnologias: [
        {
          nombre: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
          descripcion: 'Git – Control de versiones con GitHub.'
        },
        {
          nombre: 'GitHub',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          descripcion: 'GitHub – Repositorios colaborativos.'
        },
        {
          nombre: 'Azure DevOps',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
          descripcion: 'Azure DevOps – Gestión de proyectos.'
        }
      ]
    },
    {
      categoria: 'Móvil',
      tecnologias: [
        {
          nombre: 'Flutter',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
          descripcion: 'Flutter – Desarrollo de app de pedidos y otros proyectos de prueba.'
        },
        {
          nombre: 'Dart',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
          descripcion: 'Dart – Lenguaje utilizado para Flutter.'
        }
      ]
    }
  ];
  
}
