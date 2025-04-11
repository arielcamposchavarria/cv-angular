import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactos = [
    {
      nombre: 'Correo',
      valor: 'ariel.campos.chavarria@est.una.ac.cr',
      enlace: 'mailto:ariel.campos.chavarria@est.una.ac.crr',
    },
    {
      nombre: 'GitHub',
      valor: 'github.com/arielcamposchavarria',
      enlace: 'https://github.com/arielcamposchavarria',
    },
    {
      nombre: 'LinkedIn',
      valor: 'linkedin.com/in/ariel-campos-0b3b26339',
      enlace: 'https://linkedin.com/in/ariel-campos-0b3b26339',
    }
  ];
}
