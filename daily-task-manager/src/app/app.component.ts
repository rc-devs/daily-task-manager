import { Component, signal } from '@angular/core';
//import { ChecklistComponent } from './checklist/checklist.component';
//import { HistoryComponent } from './history/history.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [/* ChecklistComponent, HistoryComponent */ MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daily-task-manager';

  /* chooseDisplay = signal("")

  handleChooseDisplay(choice: string){
    this.chooseDisplay.set(choice);
  }
 */
}
