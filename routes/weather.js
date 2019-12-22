const express = require ('express');
const axios = require('axios');

const router = express.Router();

router.get('/', (req,res) => {
  axios.get('https://weather.ls.hereapi.com/weather/1.0/report.json?product=alerts&name=Nantes&apiKey=zUMpToszZ1uT0zwmj78f4pEe66GcDGEvpLoNigwfqYU')
    .then((response) => {
      if(err) {
        res.sendStatus(500)
    } else {
      res.send (response.data)
    }
  })  
});

module.exports = router;
