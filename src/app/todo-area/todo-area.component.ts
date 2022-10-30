import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
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

  smthDropped(event: CdkDragDrop<Task[]>){
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    if(event.container != event.previousContainer) FakeDB.todoTasks[event.currentIndex].taskUndone();
    
  }

}
