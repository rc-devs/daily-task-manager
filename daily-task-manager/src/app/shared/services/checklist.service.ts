import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  constructor() { }

  dailyTasks = [
    { id:"t1", complete: false, task: "Make Bed"},
    { id:"t2", complete: false, task: "Dishwasher"},
    { id:"t3", complete: false, task: "Dogs Out"},
    { id:"t4", complete: false, task: "Water Dogs/Cats"},
    { id:"t5", complete: false, task: "Feed Dogs"},
    { id:"t6", complete: false, task: "Feed Cats"},
    { id:"t7", complete: false, task: "Litter"},
    { id:"t8", complete: false, task: "Empty Trash"},
    { id:"t9", complete: false, task: "Sweep"},
    { id:"t10", complete: false, task: "Morning Meds"},
    { id:"t11", complete: false, task: "Evening Meds"},
    { id:"t12", complete: false, task: "Brush Down Animals"}];

  public addTaskForm = false;

  taskFormStatus(bool: boolean){
    this.addTaskForm = bool
   return this.addTaskForm;
  }

  changeFormStatus(){
    console.log(this.addTaskForm)
    if (!this.addTaskForm){
      this.addTaskForm = true
    } else if (this.addTaskForm){
      this.addTaskForm = true;
    }
    console.log(this.addTaskForm)
   return this.addTaskForm
  }

  onSubmitHandler(){
    console.log('submit connected')
    window.confirm("Are you sure you would like to submit this form?")
    // take form information task name, task status (complete: bool), and add to historical array (use local storage?)
  }

  addNewTask(newTask: string){
     //create new object and add to array in service
     let randomNumber = Math.floor(Math.random()* 100).toString();

     this.dailyTasks.unshift({
       id: 't' + randomNumber,
       complete: false,
       task: newTask,
     })
     //set form status to remove form once submitted
     this.taskFormStatus(false);
     console.log (this.dailyTasks)
  }

}
