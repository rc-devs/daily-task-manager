import { Injectable } from '@angular/core';

import { Task } from '../templates/task.model';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  constructor() { }

  dailyTasks: Task[]= ([
    { id:"t1", status:'incomplete', task: "Make Bed", description: ''},
    { id:"t2", status:'incomplete', task: "Dishwasher", description: ''},
    { id:"t3", status:'incomplete', task: "Dogs Out", description: ''},
    { id:"t4", status:'incomplete', task: "Water Dogs/Cats", description: ''},
    { id:"t5", status:'incomplete', task: "Feed Dogs", description: ''},
    { id:"t6", status:'incomplete', task: "Feed Cats", description: ''},
    { id:"t7", status:'incomplete', task: "Litter", description: ''},
    { id:"t8", status:'incomplete', task: "Empty Trash", description: ''},
    { id:"t9", status:'incomplete', task: "Sweep", description: ''},
    { id:"t10", status:'incomplete', task: "Morning Meds", description: ''},
    { id:"t11", status:'incomplete', task: "Evening Meds", description: ''},
    { id:"t12", status:'incomplete', task: "Brush Down Animals", description: ''}]);

  public addTaskForm = false;
  public history:any = "";

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

  onSubmitHandler(form:any){
    console.log(form)
    console.log('submit connected')
    window.confirm("Are you sure you would like to submit this form?")
    // take form information task name, task status (complete: bool), and add to historical array (use local storage?)
    this.history.set(form);
  }

  addNewTask(newTask: string, newDescription: string){//create new object and add to array in service
     console.log('addNewTask runs') //test log

     //get random number for use in new object id
     let randomNumber = Math.floor(Math.random()* 100).toString();

     //check if any dailyTask.id are == random number
     let checkDuplicate = this.dailyTasks.find(t  => t.id === ('t'+ randomNumber));

    //if else for adding task
    if (checkDuplicate?.id == 't'+ randomNumber){ //check for duplicate (match)
      console.log('duplicate') //test log
      this.addNewTask(newTask, newDescription); //if duplicate found, rerun function
    } else if (checkDuplicate?.id != 't'+  randomNumber) { //check for duplicate
      //add new task to array
      this.dailyTasks.unshift({
        id: 't' + randomNumber,
        status: 'incomplete',
        task: newTask,
        description: newDescription
      })
       //set form status to remove component with form once submitted
      this.taskFormStatus(false);
      console.log (this.dailyTasks) //log new array
    }
  }
/*
  filterTasksByStatus(){
    if(this.dailyTasks){

    }
  } */
}
