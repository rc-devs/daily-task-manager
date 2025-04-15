import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChecklistService } from '../../shared/services/checklist.service';

@Component({
  selector: 'app-task-card',
  imports: [FormsModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
    constructor(private checklistService: ChecklistService){}

    getDefaultChecklist(){
      return this.checklistService.dailyTasks;
    }

    changeTaskStatus(status: string){
      console.log(status)
    }

    deleteHandler(taskId:string){
      console.log(taskId)
      this.checklistService.dailyTasks = this.getDefaultChecklist().filter(t  => t.id !== taskId);
      console.log(this.checklistService.dailyTasks)
    }









}
