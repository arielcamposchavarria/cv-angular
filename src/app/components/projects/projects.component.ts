import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  // Estado local de “flip” por tarjeta (mismo índice que el *ngFor)
  flipped: boolean[] = [];

  toggleFlip(i: number) {
    this.flipped[i] = !this.flipped[i];
  }

  trackByIndex(i: number) {
    return i;
  }
}
