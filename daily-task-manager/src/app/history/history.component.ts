import { Component, inject, signal } from '@angular/core';
import { ChecklistService } from '../shared/services/checklist.service';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  checklistService = inject(ChecklistService)

  historyArray = signal(this.checklistService.history())



}
