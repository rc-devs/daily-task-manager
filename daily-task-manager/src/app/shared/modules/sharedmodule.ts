import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaskCardComponent } from "../../features/checklist/task-card/task-card.component";
import { AddTaskComponent } from "../../features/checklist/add-task/add-task.component";


@NgModule ({
  imports: [CommonModule, DatePipe, TaskCardComponent, AddTaskComponent],
  declarations: [/* TaskCardComponent, AddTaskComponent */],
  exports: [TaskCardComponent, AddTaskComponent],
})

export class SharedModule {}
