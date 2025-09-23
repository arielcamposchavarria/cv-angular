import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; // 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    TranslateModule //

  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  
}
