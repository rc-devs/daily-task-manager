import { Component } from '@angular/core';
import { ChecklistComponent } from './checklist/checklist.component';

@Component({
  selector: 'app-root',
  imports: [ChecklistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daily-task-manager';
}
