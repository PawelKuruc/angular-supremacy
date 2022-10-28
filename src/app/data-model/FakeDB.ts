import { Task } from "./Task";
import { User } from "./User";

export abstract class FakeDB{
    usersList: User[] = [
        new User('Paweł Kuruc', ''),
        new User('Eryk Pałasz', ''),
        new User('Oskar Anczyk', ''),
        new User('Paweł Wolf', '')
    ];

    todoTasks: Task[] = [
        new Task('Robienie rzeczy','', this.usersList[0]),
        new Task('Nic nierobienie','', this.usersList[1]),
        new Task('Nerwowe chodzenie','', this.usersList[2]),
        new Task('Sadzenie drzew','', this.usersList[3]),
        new Task('Roztegowanie tegesa','')
    ];

    doneTasks: Task[] = [
        new Task('Pisanie aplikacji','', this.usersList[0]),
        new Task('Porzucenie Reacta','', this.usersList[3])
    ];
}