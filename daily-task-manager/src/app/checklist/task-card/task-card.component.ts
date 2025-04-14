import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-card',
  imports: [FormsModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {


    toggleComplete(check: boolean, task: object){
     //const foundTask = this.dailyTasks.filter(( id => task === this.dailyTasks ))
     //foundTask.id = check
     console.log(check)
     console.log(task)

    }

    onSubmitHandler(){
      console.log('submit connected')
      window.confirm("Are you sure you would like to sumbit this form?")
    }






}
