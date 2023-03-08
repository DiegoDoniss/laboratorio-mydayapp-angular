import {Component, OnInit} from '@angular/core';
import {TaskInterface} from 'src/app/interfaces/taskinterface';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newTask: FormControl = new FormControl('', [Validators.required]);
  tasks: TaskInterface[] = [
    {id: '0', title: 'Learn JavaScript', completed: true},
    {id: '1', title: 'Buy a unicorn', completed: false},
    {id: '2', title: 'Make dishes', completed: false},
  ]

  constructor() {
  }


  completeTask(id: string) {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
  }

  addTask() {
    if (this.newTask.valid) {
      const newTask: TaskInterface = {
        id: this.tasks.length.toString(),
        title: this.newTask.value,
        completed: false
      }
      this.tasks.push(newTask)
      this.newTask.reset()
    }
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  editTask(editTask: { id: string, title: string }) {
    const {id, title} = editTask
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.title = title
      }
      return task
    })
  }
}
