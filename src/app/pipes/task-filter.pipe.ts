import {Pipe, PipeTransform} from '@angular/core';
import {TaskInterface} from "../interfaces/taskInterface";

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(value: TaskInterface[], filter: string|null): TaskInterface[] {
    switch (filter) {
      case 'all':
        return value
        break;
      case 'active':
        return value.filter(task => !task.completed)
        break;
      case 'completed':
        return value.filter(task => task.completed)
        break;
      default:
        return value
    }
  }

}
