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
      nombre: 'Sistema ZMTMN usuarios',
      descripcion: 'Apartado de usuarios para el Sistema de Gestion para el departamento Zona Maritimo Terrestre Municipalidad Nicoya.',
      enlace: 'https://zmtmn-usuarios.vercel.app/'
    },
    {
      nombre: 'Sistema ZMTMN administradores',
      descripcion: 'Apartado de administradores para el Sistema de Gestion para el departamento Zona Maritimo Terrestre Municipalidad Nicoya.',
      enlace: 'https://zmtmn-dashboard.vercel.app/'
    }
  ];
}
