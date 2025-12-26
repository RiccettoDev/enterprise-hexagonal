/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import {
  createLogger,
  format,
  transports,
  Logger,
  LoggerOptions,
} from 'winston';
import { ILoggerService } from './logger.interface';

export class WinstonLoggerService implements ILoggerService {
  private readonly logger: Logger;

  constructor() {
    const logFormat = format.combine(
      format.timestamp(),
      format.errors({ stack: true }),
      format.json(),
    );

    const loggerOptions: LoggerOptions = {
      level: 'info',
      format: logFormat,
      transports: [new transports.Console()],
    };

    this.logger = createLogger(loggerOptions);
  }

  info(message: string, meta?: any): void {
    this.logger.info(message, meta);
  }

  warn(message: string, meta?: any): void {
    this.logger.warn(message, meta);
  }

  error(message: string, trace?: any): void {
    this.logger.error(message, trace);
  }
}
