import { inject, Injectable, signal } from '@angular/core';

import { Task } from '../templates/task.model';
import { HistoryService } from './history.service';
import DEFAULT_DATA from '../data/default-checklist.data'
@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  historyService = inject(HistoryService)
  constructor() {}

  public addTaskForm = false;

//data
  dailyTasks = DEFAULT_DATA;

//functions
  taskFormStatus(bool: boolean) {
    this.addTaskForm = bool;
    return this.addTaskForm;
  }

  changeFormStatus() {
    console.log(this.addTaskForm);
    if (!this.addTaskForm) {
      this.addTaskForm = true;
    } else if (this.addTaskForm) {
      this.addTaskForm = true;
    }
    console.log(this.addTaskForm);
    return this.addTaskForm;
  }

  addNewTask(newTask: string, newDescription: string) {
    //create new object and add to array in service
    console.log('addNewTask runs'); //test log

    //get random number for use in new object id
    let randomNumber = Math.floor(Math.random() * 100).toString();

    //check if any dailyTask.id are == random number
    let checkDuplicate = this.dailyTasks.find(
      (t) => t.id === 't' + randomNumber
    );

    //if else for adding task
    if (checkDuplicate?.id == 't' + randomNumber) {
      //check for duplicate (match)
      console.log('duplicate'); //test log
      this.addNewTask(newTask, newDescription); //if duplicate found, rerun function
    } else if (checkDuplicate?.id != 't' + randomNumber) {
      //check for duplicate
      //add new task to array
      this.dailyTasks.unshift({
        id: 't' + randomNumber,
        status: 'incomplete',
        task: newTask,
        description: newDescription,
        showDescription: false,
      });
      //set form status to remove component with form once submitted
      this.taskFormStatus(false);
      console.log(this.dailyTasks); //log new array
    }
  }
  /*
  filterTasksByStatus(){
    if(this.dailyTasks){

    }
  } */

  onSubmitHandler(taskList: Task[]) {
    if (window.confirm('Are you sure you would like to submit this form?')){
      sessionStorage.setItem('historicalChecklist', JSON.stringify(taskList));
      console.log(sessionStorage.getItem('historicalChecklist'))
      this.historyService.createNewHistory(); //create new object in mainHistory array
      this.dailyTasks = DEFAULT_DATA;
    } else {
      console.log('user declined to submit')
    }
    }
}
