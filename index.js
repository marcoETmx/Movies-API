const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesAPI = require('./routes/movies');

moviesAPI(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});