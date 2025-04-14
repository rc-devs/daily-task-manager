import { Component } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';

@Component({
  selector: 'app-checklist',
  imports: [TaskCardComponent],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent {

}
