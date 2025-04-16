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

    changeTaskStatus(status: string, taskId:string){//use service
      console.log(status);
      console.log(taskId);

      //find object in array
      let objectToUpdate = this.checklistService.dailyTasks.find(t  => t.id === taskId);

      console.log(objectToUpdate)

      //.update


      //do i need spread operater

    }

    deleteHandler(taskId:string){
      console.log(taskId)
      this.checklistService.dailyTasks = this.getDefaultChecklist().filter(t  => t.id !== taskId);
      console.log(this.checklistService.dailyTasks)
    }









}
