const bunyan = require('bunyan');

process.env.LOG_LEVEL = `${bunyan.FATAL + 1}`;
