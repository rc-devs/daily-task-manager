import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-filter-tasks',
  imports: [],
  templateUrl: './filter-tasks.component.html',
  styleUrl: './filter-tasks.component.css'
})
export class FilterTasksComponent {
  filter = signal<string>("all");

  get debugOutput() {
    console.log("[ filter-tasks component] generated");
    return '';
  }

  filterTasks(statusFilter: string){
    console.log(statusFilter)
    return this.filter.set(statusFilter);
  }
}
