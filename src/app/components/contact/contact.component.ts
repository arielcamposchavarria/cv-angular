import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type IconType = 'img' | 'svg';

interface Contacto {
  nombre: string;
  valor: string;
  enlace: string;
  iconType: IconType;
  icono?: string;     // para img
  svgPath?: string;   // para svg
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactos: Contacto[] = [
    {
      nombre: 'Correo',
      valor: 'campos2004.05@gmail.com',
      enlace: 'mailto:campos2004.05@gmail.com',
      iconType: 'img',
      icono:
        'https://cdn.simpleicons.org/gmail'
    },
    {
      nombre: 'GitHub',
      valor: 'github.com/arielcamposchavarria',
      enlace: 'https://github.com/arielcamposchavarria',
      iconType: 'svg',
      svgPath:
        'M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.4-5.4-6.1 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.8-5.4 6.1.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z'
    },
    {
      nombre: 'LinkedIn',
      valor: 'linkedin.com/in/ariel-campos-0b3b26339',
      enlace: 'https://linkedin.com/in/ariel-campos-0b3b26339',
      iconType: 'img',
      icono:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'
    }
  ];
}
