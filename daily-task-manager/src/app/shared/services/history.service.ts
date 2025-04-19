import { Injectable, signal } from '@angular/core';
import { Historical } from '../templates/history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  //checklistService = inject(ChecklistService)
  constructor() { }
  mainHistory  = signal<Historical[]>([])

  //session storage getItem and parse to string for use
  historyJSON = sessionStorage.getItem('historicalChecklist')
  historyArray = signal(this.historyJSON ? JSON.parse(this.historyJSON): null); //google for ng help


  createNewHistory(){

    this.mainHistory().unshift(
      { date: Date.now(),
        checklist: this.historyArray(),})

  }

}
