import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {TaskInterface} from "src/app/interfaces/taskinterface";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task!: TaskInterface;
  @Output() taskClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() taskDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output() taskEdit: EventEmitter<{ id: string, title: string }> = new EventEmitter<{ id: string, title: string }>();
  editMode: boolean = false;


  onEnter(value: string) {
    if (value !== '') {
      this.editMode = false
      this.taskEdit.emit({id: this.task.id, title: value})
    }
  }
}
