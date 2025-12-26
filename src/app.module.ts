import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ILoggerService } from './lib/common/abstraction/service/logger/logger.interface';
import { WinstonLoggerService } from './lib/common/abstraction/service/logger/logger.winston';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
  providers: [
    {
      provide: 'ILoggerService',
      useClass: WinstonLoggerService,
    },
  ],
  exports: ['ILoggerService'],
})
export class AppModule {}
