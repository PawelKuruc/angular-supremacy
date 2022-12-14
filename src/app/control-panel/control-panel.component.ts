import { Component, OnInit } from '@angular/core';
import { FakeDB } from '../data-model/FakeDB';
import { Task } from '../data-model/Task';
import { User } from '../data-model/User';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  name!: string;
  desc!: string;
  user!: User;
  aviableUsers: User[];

  constructor() {
    this.aviableUsers = FakeDB.usersList;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.name){
      FakeDB.todoTasks.push(new Task(this.name,this.desc,this.user));
    }else{
      alert('Please type something!');
    }
    this.name = '';
    this.desc = '';
  }

  clearCompletedTasks(){
    FakeDB.doneTasks.splice(0);
  }

}
