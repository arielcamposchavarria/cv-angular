import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  correos = [
    'ariel.campos.chavarria@est.una.ac.cr',
    'campos2004.05@gmail.com'
  ];
  
  formData = {
    nombre: '',
    email: '',
    mensaje: '',
    destinatario: this.correos[0]
  };
  
  enviarMensaje() {
    const { nombre, email, mensaje, destinatario } = this.formData;
    const asunto = encodeURIComponent(`Mensaje de ${nombre}`);
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`);
    const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
    window.open(mailtoLink, '_blank');
  }
}
