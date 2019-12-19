//point d'entrée de l'API

const express = require ('express');
const bodyParser = require('body-parser');

const tweetsRouter = require ('./routes/tweet')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/tweet', tweetsRouter);

app.listen(8000, () => {
console.log('Server running')
});