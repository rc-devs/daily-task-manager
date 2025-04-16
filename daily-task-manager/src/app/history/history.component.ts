import { Component, signal } from '@angular/core';
import { Task } from '../shared/templates/task.model';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  

  historyArray = signal<Task[]>([])

}
