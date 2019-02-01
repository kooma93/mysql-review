const express = require('express');
const parser = require('body-parser');
const path = require('path');
const PORT = 3000;
const router = require('./routes.js');
const db = require('../database/index.js');

// initialize express
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/api', router);

app.listen(PORT, () => console.log('App is listening to PORT', PORT));
