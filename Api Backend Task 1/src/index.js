const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

let server;
mongoose.connect(config.mongoose.url).then(() => {
  console.log('Connected to MongoDB');
  server = app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
  });
});
