import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  constructor() { }

  dailyTasks = [
    { id:"t1", status:'incomplete', task: "Make Bed"},
    { id:"t2", status:'incomplete', task: "Dishwasher"},
    { id:"t3", status:'incomplete', task: "Dogs Out"},
    { id:"t4", status:'incomplete', task: "Water Dogs/Cats"},
    { id:"t5", status:'incomplete', task: "Feed Dogs"},
    { id:"t6", status:'incomplete', task: "Feed Cats"},
    { id:"t7", status:'incomplete', task: "Litter"},
    { id:"t8", status:'incomplete', task: "Empty Trash"},
    { id:"t9", status:'incomplete', task: "Sweep"},
    { id:"t10", status:'incomplete', task: "Morning Meds"},
    { id:"t11", status:'incomplete', task: "Evening Meds"},
    { id:"t12", status:'incomplete', task: "Brush Down Animals"}];

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

  addNewTask(newTask: string){//create new object and add to array in service
     console.log('addNewTask runs') //test log

     //get random number for use in new object id
     let randomNumber = Math.floor(Math.random()* 100).toString();

     //check if any dailyTask.id are == random number
     let checkDuplicate = this.dailyTasks.find(t  => t.id === ('t'+ randomNumber));

    //if else for adding task
    if (checkDuplicate?.id == 't'+ randomNumber){ //check for duplicate (match)
      console.log('duplicate') //test log
      this.addNewTask(newTask); //if duplicate found, rerun function
    } else if (checkDuplicate?.id != 't'+  randomNumber) { //check for duplicate
      //add new task to array
      this.dailyTasks.unshift({
        id: 't' + randomNumber,
        status: 'incomplete',
        task: newTask,
      })
    }

    //set form status to remove component with form once submitted
    this.taskFormStatus(false);
    console.log (this.dailyTasks) //log new array
  }

}
