import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from 'src/dtos/todos/create.todo';
import { UpdateTodoDto } from 'src/dtos/todos/update.todo';
import { TodoService } from '../services/app';

@Controller()
export class AppController {
  constructor(private readonly todosServices: TodoService) { }

  @Post('todos')
  createNewTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosServices.createTodo(createTodoDto);
  }
  @Put('todos')
  updateTodo(@Body() updateTodoDto: UpdateTodoDto) {
    return this.todosServices.updateTodo(updateTodoDto);
  }
  @Delete('todos')
  deleteTodo(@Body('id') id: String) {
    return this.todosServices.deleteTodo(id);
  }
  @Get('todos')
  getAllTodos() {
    return this.todosServices.getAllTodos();
  }
  @Get('todos/:id')
  getTodoById(@Param('id') id : String) {
    return this.todosServices.getTodoById(id);
  }

}
