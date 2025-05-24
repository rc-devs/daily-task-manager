import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChecklistService } from '../../shared/services/checklist.service';

@Component({
  selector: 'app-task-card',
  imports: [FormsModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
    constructor(private checklistService: ChecklistService){}

    get debugOutput() { //checking # times rendered
      console.log("[ task-card component] generated");
      return '';
    }

    getDefaultChecklist(){ //get default checklist for daily use
      return this.checklistService.dailyTasks;
    }

    changeTaskStatus(taskId: string, newStatus:string){ //update task status
      console.log(newStatus);
      console.log(taskId);

      return this.checklistService.dailyTasks.map(t => t.id !== taskId ? {... t, newStatus} : t.status = newStatus); //set new status in array

    }

    deleteHandler(taskId:string){
      console.log(taskId)
      this.checklistService.dailyTasks = this.getDefaultChecklist().filter(t  => t.id !== taskId); //return array of objects that DO NOT match the task id, set as new
      console.log(this.checklistService.dailyTasks) //test log confirm
    }


    showDescriptionHandler(taskId: string, bool: boolean){ //wonky or OOP; set bool inside of object itself
      return this.checklistService.dailyTasks.map(t => t.id !== taskId ? {... t, bool} : t.showDescription = bool);



    }

}
