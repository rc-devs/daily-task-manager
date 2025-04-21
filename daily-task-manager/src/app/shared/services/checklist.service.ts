import { inject, Injectable, signal, } from '@angular/core';

import { Task } from '../templates/task.model';
import { HistoryService } from './history.service';
import DEFAULT_DATA from '../data/default-checklist.data'
@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  historyService = inject(HistoryService);
 constructor() {
  //sessionStorage.setItem('defaultData', JSON.stringify([...DEFAULT_DATA]))
 }



  public addTaskForm = false;

//data


   dailyTasks = <Task[]>([
    {
      id: 't1',
      status: 'incomplete',
      task: 'Make Bed',
      description: 'Change sheets at least once a week',
      showDescription: false,
    },
    {
      id: 't2',
      status: 'incomplete',
      task: 'Dishwasher',
      description: 'Wash any dishes remaining in sink',
      showDescription: false,
    },
    {
      id: 't3',
      status: 'incomplete',
      task: 'Dogs Out',
      description: 'Run em',
      showDescription: false,
    },
  ]);


  resetDailyTasks(){
   this.dailyTasks = DEFAULT_DATA
   console.log('reset daily tasks' + this.dailyTasks)
  }

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
    } else if (checkDuplicate?.id != 't' + randomNumber) {//check for duplicate
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

  onSubmitHandler(taskList: Task[]) {
    if (window.confirm('Are you sure you would like to submit this form?')){
      sessionStorage.setItem('historicalChecklist', JSON.stringify(taskList)); //stringify taskList (most recent form submit) and set as historicalChecklist

      //this.dailyTasks = [...DEFAULT_DATA]
      this.resetDailyTasks()
      this.historyService.createNewHistory(); //create new object in mainHistory array via service

      console.log(sessionStorage.getItem('historicalChecklist')) //testlog
      console.log(this.dailyTasks) //testlog
      console.log(DEFAULT_DATA) //testlog

    } else {
      console.log('user declined to submit')
      return
    }
    }
}
