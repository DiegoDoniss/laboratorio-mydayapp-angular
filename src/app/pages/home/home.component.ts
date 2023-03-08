import { Component, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/interfaces/taskinterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tasks: TaskInterface[] = [
    {id: '1', title: 'Learn JavaScript', completed: true},
    {id: '2', title: 'Buy a unicorn', completed: false},
    {id: '3', title: 'Make dishes', completed: false},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  completeTask(id: string) {
    this.tasks = this.tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

}
