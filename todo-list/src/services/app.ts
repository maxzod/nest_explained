import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from 'src/dtos/todos/create.todo';
import { UpdateTodoDto } from 'src/dtos/todos/update.todo';
import { TodoEntity } from 'src/entites/todo';

@Injectable()
export class TodoService {
  private todos: TodoEntity[] = [
    new TodoEntity(
      `2e8242c5-7426-4bda-a3e7-00fffd38b58f`,
      false,
      `first todo`
    ),
    new TodoEntity(
      `2e8252c5-7426-4bda-a3e7-00fffd38b58f`,
      false,
      `second todo`
    ),
  ];

  createTodo(todoDto: CreateTodoDto): string {
    let newTodo = TodoEntity.fromCreateDto(todoDto);
    this.todos.push(newTodo);
    return `todo created successfully with id ${newTodo.id}`;
  }




  getAllTodos(): {
    data: TodoEntity[];
  } {
    return {
      data: this.todos
    };
  }




  updateTodo(updateDto: UpdateTodoDto) {
    // ! old Array update Code
    // let toUpdateTodo = this.todos.filter((value: TodoEntity, index: number, fullArray: TodoEntity[]) => {
    //   return value.id == updateDto.id;
    // })[0];
    // if (toUpdateTodo == null) {
    //   return new NotFoundException('cant find the wanted todo');
    // } else {
    //   toUpdateTodo = TodoEntity.fromUpdateDto(updateDto)
    //   return `todo updated successfully with id ${updateDto.id}`;
    // }
    let changeAnyTing = false;
    this.todos = this.todos.map((value: TodoEntity, index: number, fullArray: TodoEntity[]) => {
      if (value.id == updateDto.id) {
        changeAnyTing = true;
        return TodoEntity.fromUpdateDto(updateDto);
      } else {
        return value;
      }
    });

    if (!changeAnyTing) {
      return new NotFoundException('cant find the wanted todo');
    } else {
      return `todo updated successfully with id ${updateDto.id}`;
    }


  }

  deleteTodo(id: String) {

    let newArray = this.todos.filter((value: TodoEntity, index: number, fullArray: TodoEntity[]) => {
      return value.id != id;
    });
    if (newArray.length == this.todos.length) {
      return new NotFoundException('cant find the wanted todo');
    } else {
      this.todos = newArray;
      return `todo delete successfully new length is ${newArray.length}`;
    }

  }

  getTodoById(id: String) {
    let newArray = this.todos.filter((value: TodoEntity, index: number, fullArray: TodoEntity[]) => {
      return value.id == id;
    });
    if (newArray.length == 0) {
      console.log(newArray);
      return new NotFoundException('cant find the wanted todo');
    } else {
      return newArray[0];
    }

  }
}
