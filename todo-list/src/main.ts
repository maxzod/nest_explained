import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { TodoModule } from './modules/todos';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(TodoModule);
  console.log('started');

  await app.listen(3000);
 }
bootstrap();
