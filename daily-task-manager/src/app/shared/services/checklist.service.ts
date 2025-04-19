import { Injectable, signal } from '@angular/core';

import { Task } from '../templates/task.model';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  constructor() { }

  dailyTasks: Task[]= ([
    { id:"t1", status:'incomplete', task: "Make Bed", description: 'Change sheets at least once a week'},
    { id:"t2", status:'incomplete', task: "Dishwasher", description: 'Wash any dishes remaining in sink'},
    { id:"t3", status:'incomplete', task: "Dogs Out", description: 'Run em'},
    { id:"t4", status:'incomplete', task: "Water Dogs/Cats", description: 'Use clean bowls!'},
    { id:"t5", status:'incomplete', task: "Feed Dogs", description: 'Two scoops'},
    { id:"t6", status:'incomplete', task: "Feed Cats", description: 'One scoop'},
    { id:"t7", status:'incomplete', task: "Litter", description: 'Nasty Cats'},
    { id:"t8", status:'incomplete', task: "Empty Trash", description: "Don't forget smaller trashes!"},
    { id:"t9", status:'incomplete', task: "Sweep", description: 'Sysiphus'},
    { id:"t10", status:'incomplete', task: "Morning Meds (Dawgs)", description: '1 Proin Maple, 1 Joint Supp Boogie'},
    { id:"t11", status:'incomplete', task: "Evening Meds (Dawgs)", description: '1 Proin Maple, 1 Joint Supp Boogie'},]);

  public addTaskForm = false;
  public history = signal<Task[]>([]);

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

  onSubmitHandler(taskList:Task[]){
    window.confirm("Are you sure you would like to submit this form?")
    console.log({taskList})
    console.log('submit connected')
    // take form information task name, task status (complete: bool), and add to historical array (use local storage?)
    this.history.set(this.dailyTasks);
    console.log(typeof this.history, typeof this.dailyTasks, typeof {taskList})
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
