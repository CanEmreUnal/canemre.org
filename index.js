const express = require('express')
const httpLogger = require('./middlewares');
const logger = require('./utils');
const fs = require("fs")

const app = express()

app.use(httpLogger);

const port = 3000

app.get('/', (req, res) => {
  res.send('2pac is alive!')
})

app.get('/ping', (req, res) => {
    res.send('I\'m ok!')
})

fs.mkdirSync('./logs', (err) => { /* no-op */ })

app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
})