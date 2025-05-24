import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HistoryComponent } from '../history/history.component';
import { ChecklistComponent } from '../checklist/checklist.component';

@Component({
  selector: 'app-menu',
  imports: [ChecklistComponent, HistoryComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  chooseDisplay = signal("")

  get debugOutput() {
    console.log("[ menu-component ] generated");
    return '';
  }

  handleChooseDisplay(choice: string){
    this.chooseDisplay.set(choice);
  }

}
