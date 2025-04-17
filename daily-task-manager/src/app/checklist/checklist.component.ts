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

  get debugOutput() {
    console.log("[ checklist component] generated");
    return '';
  }



  getTaskForm(){
    return this.checklistService.addTaskForm
  }

  onSubmit(){
    this.checklistService.onSubmitHandler(this.checklistService.dailyTasks)
  }

  onAddNewTask(){
    this.checklistService.changeFormStatus();
  }


}
