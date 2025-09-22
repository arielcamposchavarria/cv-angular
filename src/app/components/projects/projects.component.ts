import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  nombre: string;
  fecha: string;
  descripcion?: string;
  enlace?: string;   // Demo / Proyecto
  github?: string;   // Repo
  flipped?: boolean; // estado de la tarjeta
  tags?: string[];
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      nombre: 'Lanaku – Gestión Hotelera (UNA)',
      fecha: '2025 – presente',
      descripcion:
        'Backend para la plataforma académica para gestión de Front Desk, Reservas y Housekeeping. Control de estadías, estados de limpieza, asignación de habitaciones y flujo de reservas.',
      enlace: 'https://backendhotelt.onrender.com/',
      github: 'https://github.com/Josue2406/BackendHotelT.git',
      tags: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Postman']
    },
    {
      nombre: 'Sistema ZMTMN – Usuarios',
      fecha: '2024 – 2025',
      descripcion:
        'Portal ciudadano para trámites de Zona Marítimo Terrestre de la Municipalidad de Nicoya.',
      enlace: 'https://zmtmn-usuarios.municoya.go.cr/',
      github: 'https://github.com/DeptoZMTMN/Frontend-Usuarios.git',
      tags: ['React', 'TypeScript', 'NestJS', 'REST API']
    },
    {
      nombre: 'Sistema ZMTMN – Administradores',
      fecha: '2024 – 2025',
      descripcion:
        'Dashboard administrativo para la gestión de solicitudes del departamento Zona Maritimo Terrestre de la Municipalidad de Nicoya.',
      enlace: 'https://zmtmn-admin.municoya.go.cr/',
      github: 'https://github.com/DeptoZMTMN/Frontend-Administrativo.git',
      tags: ['React', 'TypeScript', 'NestJS', 'REST API']
    },
    {
      nombre: 'BD Taller Mecánico',
      fecha: '2024',
      descripcion:
        'Modelo y scripts de base de datos para inventario, pedidos de repuestos, ventas y reparaciones.',
      enlace: '',
      github: 'https://github.com/arielcamposchavarria/GestionTaller.git',
      tags: ['SQL Server', 'Modelado de datos']
    },
    {
      nombre: 'App supermercado (móvil)',
      fecha: '2025',
      descripcion:
        'Pedidos, asignación a repartidor y gestión de inventario. Front + Backend.',
      enlace: '',
      github: 'https://github.com/DannyJimenezA/aplicacion_abuelos_yupi.git',
      tags: ['Flutter', 'Dart', 'NestJS', 'REST API']
    }
  ];

  toggleFlip(i: number) {
    this.projects[i].flipped = !this.projects[i].flipped;
  }
}
