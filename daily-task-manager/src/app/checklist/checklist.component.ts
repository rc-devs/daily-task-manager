import { Component, signal } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';
import { ChecklistService } from '../shared/services/checklist.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { FilterTasksComponent } from './filter-tasks/filter-tasks.component';

@Component({
  selector: 'app-checklist',
  imports: [TaskCardComponent, AddTaskComponent, FilterTasksComponent],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent  {
  constructor(public checklistService: ChecklistService){  }


  getTaskForm(){
    return this.checklistService.addTaskForm
  }

  onSubmit(form:any){
    this.checklistService.onSubmitHandler(form)
  }

  onAddNewTask(){
    this.checklistService.changeFormStatus();
  }


}
