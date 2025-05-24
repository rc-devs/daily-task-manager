import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChecklistService } from '../../../shared/services/checklist.service';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  constructor(public checklistService: ChecklistService){  }

  get debugOutput() {
    console.log("[ add-task component] generated");
    return '';
  }

  submitNewTask(newTask: string, newDescription: string){
    this.checklistService.addNewTask(newTask, newDescription);
    }

    cancelHandler(){
      this.checklistService.showAddTaskForm(false);
    }


  }


