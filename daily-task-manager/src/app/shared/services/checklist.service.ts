import { inject, Injectable, signal, } from '@angular/core';

import { Task } from '../templates/task.model';
import { HistoryService } from './history.service';
import DEFAULT_DATA from '../data/default-checklist.data'
@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  historyService = inject(HistoryService);
 constructor() {}

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
    {
      id: 't4',
      status: 'incomplete',
      task: 'Water Dogs/Cats',
      description: 'Use clean bowls!',
      showDescription: false,
    },
    {
      id: 't5',
      status: 'incomplete',
      task: 'Feed Dogs',
      description: 'Two scoops',
      showDescription: false,
    },
    {
      id: 't6',
      status: 'incomplete',
      task: 'Feed Cats',
      description: 'One scoop',
      showDescription: false,
    },
    {
      id: 't7',
      status: 'incomplete',
      task: 'Litter',
      description: 'Nasty Cats',
      showDescription: false,
    },
    {
      id: 't8',
      status: 'incomplete',
      task: 'Empty Trash',
      description: "Don't forget smaller trashes!",
      showDescription: false,
    },
    {
      id: 't9',
      status: 'incomplete',
      task: 'Sweep',
      description: 'Sysiphus',
      showDescription: false,
    },

    {
      id: 't10',
      status: 'incomplete',
      task: 'Morning Meds (Dawgs)',
      description: '1 Proin Maple, 1 Joint Supp Boogie',
      showDescription: false,
    },
    {
      id: 't11',
      status: 'incomplete',
      task: 'Evening Meds (Dawgs)',
      description: '1 Proin Maple, 1 Joint Supp Boogie',
      showDescription: false,
    },
  ]);

//functions
  resetDailyTasks(){
   this.dailyTasks = [...DEFAULT_DATA]
   console.log('reset daily tasks')
   console.log(this.dailyTasks)
  }


  showAddTaskForm(bool: boolean) {
    this.addTaskForm = bool; //set public bool to false (affects html)
    return this.addTaskForm;
  }

//create new object and add to array in service
  addNewTask(newTask: string, newDescription: string) {
    console.log(this.dailyTasks)
  //get random number for use in new object id
    let randomNumber = Math.floor(Math.random() * 100).toString();

  //check if any dailyTask.id are == random number
    let checkDuplicate = this.dailyTasks.find((t) => t.id === 't' + randomNumber);

  //if else for adding task
    if (checkDuplicate?.id == 't' + randomNumber) {//check for duplicate (if yes)
    //check for duplicate (if match it duplicate)
      console.log('duplicate id found'); //test log
      this.addNewTask(newTask, newDescription); //if duplicate found, rerun function
    } else if (checkDuplicate?.id != 't' + randomNumber) {//check for duplicate (if no)
    //add new task to array
      console.log('no duplicate id found')
      this.dailyTasks.unshift({
        id: 't' + randomNumber,
        status: 'incomplete',
        task: newTask,
        description: newDescription,
        showDescription: false,
      });
      //set form status to remove component with form once submitted
      this.showAddTaskForm(false);
      console.log(this.dailyTasks); //log new array
    }
  }

  onSubmitHandler(taskList: Task[], defaultStatus:string) {
    if (window.confirm('Are you sure you would like to submit this form?')){

      localStorage.setItem('historicalChecklist', JSON.stringify(taskList)); //stringify taskList (most recent form submit) and set as historicalChecklist

      this.historyService.createNewHistory(); //create new object in mainHistory array via service

      this.resetDailyTasks()

      return this.dailyTasks.map(t => t.id !== t.id ? {...t, defaultStatus} : t.status = defaultStatus); //reset all statuses to 'incomplete'
    } else {
      console.log('user declined to submit')
      return
    }
    }
}
