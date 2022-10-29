import { Component, OnInit } from '@angular/core';
import { FakeDB } from '../data-model/FakeDB';
import { Task } from '../data-model/Task';

@Component({
  selector: 'app-todo-area',
  templateUrl: './todo-area.component.html',
  styleUrls: ['./todo-area.component.css']
})
export class TodoAreaComponent implements OnInit {

  todoList: Task[];

  constructor() {
    this.todoList = FakeDB.todoTasks;
  }

  ngOnInit(): void {
  }

}
