import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../data-model/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  mouseOverTopBar: boolean;

  constructor() { 
    this.mouseOverTopBar = false;
  }

  ngOnInit(): void {
  }

}
