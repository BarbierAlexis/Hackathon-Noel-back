//point d'entrée de l'API

const express = require ('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();

const tweetsRouter = require('./routes/tweet.js')
const weatherRouter = require('./routes/weather.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors())
app.use('/tweet', tweetsRouter);
app.use('/weather', weatherRouter);
app.use(axios)

app.listen(8090, () => {
console.log('Server running')
});