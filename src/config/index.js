const dotenv = require('dotenv');

const envFound = dotenv.config();
if ( envFound.error ) {
  throw new Error('Couldn\'t find .env file');
}

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10),
  databaseUrl: process.env.DATABASE_URL,
  apiPrefix: process.env.API_PREFIX,
  logLevel: process.env.LOG_LEVEL
};