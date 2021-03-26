const winston = require('winston');
const config = require('../config');

const logger = winston.createLogger({
  level: config.logLevel,
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
});

module.exports = logger;