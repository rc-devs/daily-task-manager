import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

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

    addTask = false;

  constructor() { }



  onSubmitHandler(){
    console.log('submit connected')
    window.confirm("Are you sure you would like to sumbit this form?")
  }


  addNewTask(){}

}
