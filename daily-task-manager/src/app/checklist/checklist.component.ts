import { Component, OnInit, signal } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';
import { ChecklistService } from '../shared/services/checklist.service';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-checklist',
  imports: [TaskCardComponent, AddTaskComponent],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent  {
  constructor(public checklistService: ChecklistService){  }

  getTaskStatus(){
    return this.checklistService.addTask
  }


  onSubmit(){
    this.checklistService.onSubmitHandler()
  }

  onAddNewTask(){
    this.checklistService.changeStatus();
  }

}
