import { Injectable, signal } from '@angular/core';
import { Historical } from '../templates/history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  //checklistService = inject(ChecklistService)
  constructor() { }
  mainHistory  = signal<Historical[]>([])




  createNewHistory(){

  //session storage getItem and parse to string for use
    let historyJSON = sessionStorage.getItem('historicalChecklist')
    let historyArray = signal(historyJSON ? JSON.parse(historyJSON): null); //google for ng help

    this.mainHistory().unshift(
      { date: Date.now(),
        checklist: historyArray(),})

  }

}
