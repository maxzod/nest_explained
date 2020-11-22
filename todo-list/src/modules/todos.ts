import { Module } from '@nestjs/common';
import { AppController as TodoController } from '../controllers/todos';
import { TodoService } from '../services/app';

@Module({
  imports: [],
  controllers: [TodoController],
  // providers: [],
  providers: [TodoService],
})
export class AppModule {}
