const morgan = require('morgan');
const logger = require('../utils');

logger.stream = {
  write: message => logger.info(message.substring(0, message.lastIndexOf('\n')))
};

morgan.token('remote-addr', function (req) {
  return req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
});

module.exports = morgan(
  ':remote-addr - :remote-user - [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"',
  { stream: logger.stream }
);