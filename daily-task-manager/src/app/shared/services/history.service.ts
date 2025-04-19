import { inject, Injectable, signal } from '@angular/core';
import { ChecklistService } from './checklist.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  checklistService = inject(ChecklistService)
  constructor() { }

  historyJSON = sessionStorage.getItem('historicalChecklist')
  historyArray = this.historyJSON ? JSON.parse(this.historyJSON): null; //google

  test(){
    console.log(this.historyArray)
  }

  //recieve checklist data from add-tasks-component when click onSubmit (currently checklist-component)
  //push as own object to array?




}
