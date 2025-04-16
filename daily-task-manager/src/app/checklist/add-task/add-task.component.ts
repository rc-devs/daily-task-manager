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

  submitNewTask(newTask: string, newDescription: string){
    this.checklistService.addNewTask(newTask, newDescription);
    }


  }


