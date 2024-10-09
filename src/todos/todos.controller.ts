import { Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { TodoList } from './dto/todo.entity';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';


@Controller('todos')
export class TodosController {
    // to be able to use service we need to inject it here as dependency.

    constructor(private readonly todosService: TodosService) {}


    @Get()
    allTodos(): Todo[] {
        return this.todosService.allTodos()
    }

    // in case we want return any activity by its id, then we will need a paramete in our function, that why we have to import Param

    @Get(':id')
    findOneTodo(@Param('id') id): Todo {
        return this.todosService.findOneTodo(id) 
    }

    // then in case we want to use Post to create new thing
    // Under post method, we need to create data structure since we are sending data. that is where we have to create a DTO or interface. 
    // and since we are creating and structuring our data, we need body decorator


    @Post()
    createTask(@Body() todoList: TodoList): string {
        return `Task: ${todoList.taskTitle} \n ${todoList.isDone} \n What's to be done: ${todoList.activity} ` // in this case todoList is acting like an object storing all date from TodoList.
    }



    // The same as getone, delete method needs id too.

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        return `activity with id: ${id} deleted successfully`
    }

    // we can update data depending on id, therefore we will need Body and Param also try to acc our dto
    @Put(':id') 
    updateTask(@Body() updatetodoList: TodoList, @Param('id') id): string{
        return `Update Task: ${id} \n isDone: ${updatetodoList.isDone}`
    }
 }
