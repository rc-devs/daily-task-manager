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
    let historyJSON = localStorage.getItem('historicalChecklist') //get most recent JSON item
    let historyArray = historyJSON ? JSON.parse(historyJSON): null; //parse JSON item (had to google for this one)

  //add new historical object to mainHistory array
    this.mainHistory().unshift(
      { date: Date.now(),
        checklist: historyArray,})
  }


}
