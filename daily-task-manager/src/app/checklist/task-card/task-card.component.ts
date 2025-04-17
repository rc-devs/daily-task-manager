import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
    showDescription = signal(false)

    get debugOutput() {
      console.log("[ task-card component] generated");
      return '';
    }

    getDefaultChecklist(){
      return this.checklistService.dailyTasks;
    }

    changeTaskStatus(taskId: string, newStatus:string){//use service
      console.log(newStatus);
      console.log(taskId);

      return this.checklistService.dailyTasks.map(t => t.id !== taskId ? {... t, newStatus} : t.status = newStatus);
    }

    deleteHandler(taskId:string){
      console.log(taskId)
      this.checklistService.dailyTasks = this.getDefaultChecklist().filter(t  => t.id !== taskId);
      console.log(this.checklistService.dailyTasks)
    }
/*
    showDescriptionHandler(bool: boolean){
      this.showDescription.set(bool);
    } */

    onSubmit(){
      this.checklistService.onSubmitHandler(this.checklistService.dailyTasks)
    }








}
