import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChecklistService } from '../shared/services/checklist.service';
import { HistoryService } from '../shared/services/history.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [DatePipe],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  checklistService = inject(ChecklistService)
  historyService = inject(HistoryService)


  get debugOutput() {
    console.log("[ history component] generated");
    return '';
  }

  historyArray = signal(this.checklistService.dailyTasks)



}
