import {Component, OnInit} from '@angular/core';
import {TaskInterface} from 'src/app/interfaces/taskinterface';
import {FormControl, Validators} from "@angular/forms";

const constTasks: TaskInterface[] = [
  {id: '0', title: 'Learn JavaScript', completed: true},
  {id: '1', title: 'Buy a unicorn', completed: false},
  {id: '2', title: 'Make dishes', completed: false},
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tasks!: TaskInterface[];
  newTask: FormControl = new FormControl('', [Validators.required]);

  get itemsLeft(): number {
    return this.tasks.filter(task => !task.completed).length
  }

  ngOnInit() {
    const local = localStorage.getItem('mydayapp-angular')
    this.tasks = local ? JSON.parse(local) : constTasks
  }

  completeTask(id: string) {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    localStorage.setItem('mydayapp-angular', JSON.stringify(this.tasks))
  }

  clearCompletedTasks() {
    this.tasks = this.tasks.filter(task => !task.completed)
    localStorage.setItem('mydayapp-angular', JSON.stringify(this.tasks))
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
    localStorage.setItem('mydayapp-angular', JSON.stringify(this.tasks))
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
    localStorage.setItem('mydayapp-angular', JSON.stringify(this.tasks))
  }

  editTask(editTask: { id: string, title: string }) {
    const {id, title} = editTask
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.title = title.trim()
      }
      return task
    })
    localStorage.setItem('mydayapp-angular', JSON.stringify(this.tasks))
  }
}
