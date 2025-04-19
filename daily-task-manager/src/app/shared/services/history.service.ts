import { inject, Injectable, signal } from '@angular/core';
import { ChecklistService } from './checklist.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  //checklistService = inject(ChecklistService)
  constructor() { }
  mainHistory  = signal<string[]>([])

  //session storage getItem and parse to string for use
  historyJSON = sessionStorage.getItem('historicalChecklist')
  historyArray = signal(this.historyJSON ? JSON.parse(this.historyJSON): null); //google for ng help



  //recieve checklist data from add-tasks-component when click onSubmit (currently checklist-component)
  //push as own object to array?


  createNewHistory(){
    this.mainHistory().unshift(this.historyArray())
    
  }



}
