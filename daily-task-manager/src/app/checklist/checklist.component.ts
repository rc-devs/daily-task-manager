import { Component } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';
import { ChecklistService } from '../shared/services/checklist.service';

@Component({
  selector: 'app-checklist',
  imports: [TaskCardComponent],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent {
  constructor(private checklistService: ChecklistService){}

  onSubmit(){
    this.checklistService.onSubmitHandler()
  }

  onAddNewTask(){
    this.checklistService.addNewTask()
  }

}
