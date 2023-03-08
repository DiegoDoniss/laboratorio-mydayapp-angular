import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TaskInterface} from "src/app/interfaces/taskinterface";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task!: TaskInterface;
  @Output() taskClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() taskDelete: EventEmitter<string> = new EventEmitter<string>();
}
