import { Component } from '@angular/core';
import { Task } from './data-model/Task';
import { User } from './data-model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-supremacy';

  constructor(){
    var user1: User = new User('Paweł Kuruc', 'orange');
    var user2: User = new User('Eryk Pałasz', 'blue');

    var task1: Task = new Task('Doing things', '');
    var task2: Task = new Task('Something important', '', user1);

    task1.assign(user2);
    task2.setName('Collecting data');
    task2.setDescription('This is a task about collecting some important data');
    task2.assign(user2);
    task2.removeAssignment();
    task1.showTaskHistory();
    task2.showTaskHistory();
  }

}
