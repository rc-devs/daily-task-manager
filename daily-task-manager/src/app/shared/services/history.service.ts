import { inject, Injectable, signal } from '@angular/core';
import { ChecklistService } from './checklist.service';
import { Task } from '../templates/task.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  checklistService = inject(ChecklistService)
  constructor() { }

  historyArray = signal(this.checklistService.history())

  //recieve checklist data from add-tasks-component when click onSubmit (currently checklist-component)
  //push as own object to array?




}
