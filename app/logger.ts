import * as bunyan from 'bunyan';

export const logger = bunyan.createLogger({
  name: process.env.npm_package_name,
  level: (process.env.LOG_LEVEL as bunyan.LogLevelString) || 'debug',
  serializers: bunyan.stdSerializers
});
