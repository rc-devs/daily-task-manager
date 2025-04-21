import { Component, OnDestroy } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [ MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy{
  title = 'daily-task-manager';

  ngOnDestroy(): void {
    sessionStorage.clear()
  }
}
