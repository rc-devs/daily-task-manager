import { Component } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';
import { ChecklistService } from '../shared/services/checklist.service';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-checklist',
  imports: [TaskCardComponent, AddTaskComponent],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent {
  constructor(private checklistService: ChecklistService){}
  addTask = false;

  onSubmit(){
    this.checklistService.onSubmitHandler()
  }

  onAddNewTask(){
    this.addTask = true;
  }

}
