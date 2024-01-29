import winston from 'winston';
import { ILogger } from '@application/common/interfaces/logger/ILogger';

export function makeLogger(): ILogger {
  return winston.createLogger({
    format: winston.format.json(),
    level: 'info',
    transports: [
      new winston.transports.Console({
        format: winston.format.json(),
        level: 'info',
        silent: process.env.NODE_ENV === 'test',
      }),
    ],
  });
}