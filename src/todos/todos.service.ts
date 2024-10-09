import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
    // since I am unable to connect to the database, I have to create hard coded data. which will depend on our interface properties
    
    private readonly allTodosData: Todo[] = [
        // we are making it arr so that we can pass many data that can be accessible outside the array.
        {
            id: "324254535435",
            taskTitle: "Sport",
            activity: "do abs and legs",
            isDone: true
        },
        {
            id: "5248573208572348",
            taskTitle: "Reading",
            activity: "Reading at least 100pages of Rich dad Poor dad",
            isDone: false
        },
        {
            id: "324123432",
            taskTitle: "Visiting",
            activity: "Visit myfriend Mike at Nyamirambo",
            isDone: true
        }
    ];

    // we need the same function as one in controller to return all data that we created using our inteface.
    allTodos(): Todo[]{
        return this.allTodosData;
    }

    findOneTodo(id: string): Todo {
        return this.allTodosData.find(allTodosData => allTodosData.id === id)
    }

    deleteTask(): Todo[] {
        return this.allTodosData.splice(2,3)
    }
}
