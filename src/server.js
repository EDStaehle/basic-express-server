'use strict';

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const logger = require('./middleware/logger')
const notFound = require('./handlers/404')
const errorHandler = require('./handlers/500')
const validator = require('./middleware/validator')
// create an instance of express => create a singleton
const app = express();

// middleware => functions that
app.use(cors());
// app.use(logger);

app.get('/', (req, res, next) => {
res.status(200).send('hello world');
  next('error')
})
app.get('/person', validator, (req, res, next) =>{
 res.status(200).json({'name': req.query.name})
})

app.get('/bad', (req, res, next) => {
  next('we have a problem')
})
app.use('*', notFound)
app.use(errorHandler)

function start(){
  app.listen(PORT, () => console.log(`listening to server on ${PORT}`));
}
module.exports = {start, app};
