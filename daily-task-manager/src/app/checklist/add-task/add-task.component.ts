import { Component } from '@angular/core';
import { ChecklistService } from '../../shared/services/checklist.service';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(public checklistService: ChecklistService){  }

  submitNewTask(){
      console.log(this.checklistService.addTask)
      if (!this.checklistService.addTask){
        this.checklistService.taskStatus(true);
      } else if (this.checklistService.addTask){
        this.checklistService.taskStatus(false);
      }
      console.log(this.checklistService.addTask)
     return this.checklistService.addTask
  }

}
