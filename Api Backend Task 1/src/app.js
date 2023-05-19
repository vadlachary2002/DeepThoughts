const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./routes/v3');

const app = express();
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions ={
  origin:[config.frontend_url], 
  credentials:true,            
  optionSuccessStatus:200,
  allowedHeaders: ['Content-Type','Authorization','x-csrf-token'],
}
app.use(cors(corsOptions));
app.use('/api/v3',routes);


module.exports = app;
