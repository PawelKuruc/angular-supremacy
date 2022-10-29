import { Task } from "./Task";
import { User } from "./User";

export abstract class FakeDB{
    static usersList: User[] = [
        new User('Paweł Kuruc', '#de7a2f'),
        new User('Eryk Pałasz', '#386146'),
        new User('Oskar Anczyk', '#9574e3'),
        new User('Paweł Wolf', '#12D1B4')
    ];

    static todoTasks: Task[] = [
        new Task('Robienie rzeczy',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lectus imperdiet, interdum mauris a, pretium velit. Mauris fermentum, odio ac fermentum faucibus, magna mi pretium enim, id ultrices felis neque sed magna. Praesent rutrum congue leo, sit amet lobortis orci blandit sit amet. Nullam luctus, risus id vehicula tristique, metus ligula ultrices felis, in pulvinar tellus est pellentesque lacus. Donec mattis vel ipsum vel condimentum. Duis ut porta ligula. In porttitor porta sem et commodo. Praesent efficitur augue eu suscipit laoreet. Cras posuere vestibulum elit id lacinia. Curabitur luctus erat ac justo tincidunt egestas. Donec gravida varius tempor.',
                this.usersList[0]),
        new Task('Nic nierobienie',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lectus imperdiet, interdum mauris a, pretium velit. Mauris fermentum, odio ac fermentum faucibus, magna mi pretium enim, id ultrices felis neque sed magna. Praesent rutrum congue leo, sit amet lobortis orci blandit sit amet. Nullam luctus, risus id vehicula tristique, metus ligula ultrices felis, in pulvinar tellus est pellentesque lacus. Donec mattis vel ipsum vel condimentum. Duis ut porta ligula. In porttitor porta sem et commodo. Praesent efficitur augue eu suscipit laoreet. Cras posuere vestibulum elit id lacinia.',
                this.usersList[1]),
        new Task('Nerwowe chodzenie',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lectus imperdiet, interdum mauris a, pretium velit. Mauris fermentum, odio ac fermentum faucibus, magna mi pretium enim, id ultrices felis neque sed magna. Praesent rutrum congue leo, sit amet lobortis orci blandit sit amet. Nullam luctus, risus id vehicula tristique, metus ligula ultrices felis, in pulvinar tellus est pellentesque lacus. Donec mattis vel ipsum vel condimentum. Duis ut porta ligula. In porttitor porta sem et commodo. Praesent efficitur augue eu suscipit laoreet. Cras posuere vestibulum elit id lacinia. Curabitur luctus erat ac justo tincidunt egestas.',
                this.usersList[2]),
        new Task('Sadzenie drzew',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lectus imperdiet, interdum mauris a, pretium velit. Mauris fermentum, odio ac fermentum faucibus, magna mi pretium enim, id ultrices felis neque sed magna. Praesent rutrum congue leo, sit amet lobortis orci blandit sit amet. Nullam luctus, risus id vehicula tristique, metus ligula ultrices felis, in pulvinar tellus est pellentesque lacus. Donec mattis vel ipsum vel condimentum. Duis ut porta ligula. In porttitor porta sem et commodo. Praesent efficitur augue eu suscipit laoreet.',
                this.usersList[3]),
        new Task('Roztegowanie tegesa',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lectus imperdiet, interdum mauris a, pretium velit. Mauris fermentum, odio ac fermentum faucibus, magna mi pretium enim, id ultrices felis neque sed magna. Praesent rutrum congue leo, sit amet lobortis orci blandit sit amet. Nullam luctus, risus id vehicula tristique, metus ligula ultrices felis, in pulvinar tellus est pellentesque lacus. Donec mattis vel ipsum vel condimentum. Duis ut porta ligula. In porttitor porta sem et commodo. Praesent efficitur augue eu suscipit laoreet. Cras posuere vestibulum elit id lacinia. Curabitur luctus erat ac justo tincidunt egestas.',
                )
    ];

    static doneTasks: Task[] = [
        new Task('Pisanie aplikacji',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lectus imperdiet, interdum mauris a, pretium velit. Mauris fermentum, odio ac fermentum faucibus, magna mi pretium enim, id ultrices felis neque sed magna. Praesent rutrum congue leo, sit amet lobortis orci blandit sit amet. Nullam luctus, risus id vehicula tristique, metus ligula ultrices felis, in pulvinar tellus est pellentesque lacus. Donec mattis vel ipsum vel condimentum. Duis ut porta ligula. In porttitor porta sem et commodo. Praesent efficitur augue eu suscipit laoreet.',
                this.usersList[0]),
        new Task('Porzucenie Reacta',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lectus imperdiet, interdum mauris a, pretium velit. Mauris fermentum, odio ac fermentum faucibus, magna mi pretium enim, id ultrices felis neque sed magna. Praesent rutrum congue leo, sit amet lobortis orci blandit sit amet. Nullam luctus, risus id vehicula tristique, metus ligula ultrices felis, in pulvinar tellus est pellentesque lacus. Donec mattis vel ipsum vel condimentum. Duis ut porta ligula. In porttitor porta sem et commodo. Praesent efficitur augue eu suscipit laoreet. Cras posuere vestibulum elit id lacinia.',
                this.usersList[3])
    ];
}