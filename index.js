//point d'entrée de l'API

const express = require ('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors')

const tweetsRouter = require ('./routes/tweet')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors())
app.use('/tweet', tweetsRouter);
app.use(axios)

app.listen(8000, () => {
console.log('Server running')
});