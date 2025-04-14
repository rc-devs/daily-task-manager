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

    toggleComplete(check: boolean){//change complete:false to complete:true, and update array

    }






}
