import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = app.get('ILoggerService');
  logger.info('Application started');

  await app.listen(3000);
}

bootstrap();
