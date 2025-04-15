import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      nombre: 'Sistema ZMTMN usuarios 2024-presente',
      descripcion: 'Apartado de usuarios para el Sistema de Gestion para el departamento Zona Maritimo Terrestre Municipalidad Nicoya.',
      vistaPrevia: 'https://via.placeholder.com/400x250.png?text=Vista+Prev+Usuarios',
      enlace: 'https://zmtmn-usuarios.vercel.app/'
    },
    {
      nombre: 'Sistema ZMTMN administradores 2024-presente',
      descripcion: 'Apartado de administradores para el Sistema de Gestion para el departamento Zona Maritimo Terrestre Municipalidad Nicoya.',
      vistaPrevia: 'assets/img/admins.png',
      enlace: 'https://zmtmn-dashboard.vercel.app/'
    },
    {
      nombre: 'Base de datos para un taller 2024',
      descripcion: 'Base de datos para gestion de un taller con gestion de inventario, pedidos de repuestos, ventas y reparaciones',
      vistaPrevia: 'assets/img/admins.png',
      enlace: 'https://github.com/arielcamposchavarria/GestionTaller.git'
    }
  ];
}
