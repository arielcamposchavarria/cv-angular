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
  skills = [
    'Lenguajes: Dart, TypeScript, JavaScript, C#',
  'Frameworks: Flutter, React, NestJS, Angular, ASP.NET Core',
  'Bases de datos: MySQL',
  'Herramientas: Git, GitHub, Vercel, Render, Railway, AzureDevOps'

  ];
}
