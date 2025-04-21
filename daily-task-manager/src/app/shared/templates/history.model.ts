import { Task } from "./task.model";

export interface Historical {
  date: number,
  checklist: [Task],
}
