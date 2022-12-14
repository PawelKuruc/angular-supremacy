import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FakeDB } from '../data-model/FakeDB';
import { Task } from '../data-model/Task';

@Component({
  selector: 'app-done-area',
  templateUrl: './done-area.component.html',
  styleUrls: ['./done-area.component.css']
})
export class DoneAreaComponent implements OnInit {

  doneList: Task[];

  constructor() {
    this.doneList = FakeDB.doneTasks;
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
    if(event.container != event.previousContainer) FakeDB.doneTasks[event.currentIndex].taskDone();
  }
}
