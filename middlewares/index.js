const morgan = require('morgan');
const logger = require('../utils');

logger.stream = {
  write: message => logger.info(message.substring(0, message.lastIndexOf('\n')))
};

module.exports = morgan(
  ':remote-addr - :remote-user - :http-x-forwarded-for - [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"',
  { stream: logger.stream }
);