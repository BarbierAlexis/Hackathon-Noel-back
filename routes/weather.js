const express = require ('express');
const axios = require('axios');

const router = express.Router();

router.get('/', (req,res) => {
  axios.get('https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=zUMpToszZ1uT0zwmj78f4pEe66GcDGEvpLoNigwfqYU&product=observation&name=Nantes')
    .then(response => {
      res.status(200).send(response.data)
  }).catch(err =>{
      res.sendStatus(500)
      throw err

  })
});

module.exports = router;
