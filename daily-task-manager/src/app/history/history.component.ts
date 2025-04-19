import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChecklistService } from '../shared/services/checklist.service';
import { HistoryService } from '../shared/services/history.service';

@Component({
  selector: 'app-history',
  imports: [],
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

 /*  test(){
    console.log('test runs');

    console.log(this.historyService.historyArray)
  } */

}
