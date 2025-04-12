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
      enlace: 'mailto:ariel.campos.chavarria@est.una.ac.cr',
      icono: 'data:image/png;base64,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'
    },
    {
      nombre: 'GitHub',
      valor: 'github.com/arielcamposchavarria',
      enlace: 'https://github.com/arielcamposchavarria',
      icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
    },
    {
      nombre: 'LinkedIn',
      valor: 'linkedin.com/in/ariel-campos-0b3b26339',
      enlace: 'https://linkedin.com/in/ariel-campos-0b3b26339',
      icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'
    }
  ];
}
