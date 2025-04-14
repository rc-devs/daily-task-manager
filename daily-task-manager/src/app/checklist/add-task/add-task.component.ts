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

  submitNewTask(newTask: string){
    //create new object and add to array in service
    let randomNumber = (Math.random()* 100).toString();

    this.checklistService.dailyTasks.unshift({
      id: 't' + randomNumber,
      complete: false,
      task: newTask,
    })
    //set form status to remove form once submitted
    this.checklistService.taskFormStatus(false);
    }


  }


