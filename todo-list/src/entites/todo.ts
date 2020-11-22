import { CreateTodoDto } from 'src/dtos/todos/create.todo';
import { UpdateTodoDto } from 'src/dtos/todos/update.todo';
import { v4 as uuidv4 } from 'uuid';

export class TodoEntity {
   readonly id: String;
   readonly isChecked: boolean;
   readonly value: String;

 
   constructor(
      id: String,
      isChecked: boolean,
      value: String,
   ){
      this.id = id;
      this.isChecked=isChecked,
      this.value = value;
   }
   static fromCreateDto(createDto: CreateTodoDto) :TodoEntity{
      return new TodoEntity(
         uuidv4(),
         false,
         createDto.value
      );
   }
   static fromUpdateDto(updateTdo: UpdateTodoDto) :TodoEntity{
      return new TodoEntity(
         updateTdo.id,
         updateTdo.isChecked,
         updateTdo.value
      );
   }

 
}