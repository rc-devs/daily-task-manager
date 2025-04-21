import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';
import { ChecklistService } from '../shared/services/checklist.service';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-checklist',
  imports: [TaskCardComponent, AddTaskComponent, /* FilterTasksComponent */],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChecklistComponent  {
  constructor(public checklistService: ChecklistService){  }

  get debugOutput() {
    console.log("[ checklist component] generated");
    return '';
  }

  getAddTaskForm(){
    return this.checklistService.addTaskForm
  }

  onAddNewTask(){
    this.checklistService.changeFormStatus();
  }

  onSubmit(){
    this.checklistService.onSubmitHandler(this.checklistService.dailyTasks)
  }

}
