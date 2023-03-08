import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {TaskInterface} from "src/app/interfaces/taskInterface";


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
  @ViewChild('editValue') input!: ElementRef;


  onEnter(value: string) {
    if (value !== '') {
      this.editMode = false
      this.taskEdit.emit({id: this.task.id, title: value})
    }
  }

  onEditMode() {
    this.editMode = true
    this.input.nativeElement.focus()
  }

  exitEditMode() {
    this.editMode = false
    this.input.nativeElement.value = this.task.title
  }
}
