import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { FormsModule } from '@angular/forms';
import html2pdf from 'html2pdf.js';
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
  async generarPDF() {
    const element = document.getElementById('cv-content');
    if (!element) return;
  
    const html2pdf = (await import('html2pdf.js')).default;
  
    const opt = {
      margin:       0.5,
      filename:     'cv-ariel-campos.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(element).save();
  }
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
