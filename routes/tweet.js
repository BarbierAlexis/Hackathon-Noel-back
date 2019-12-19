const express = require('express');
const router = express.Router();

console.log('sdjsqjdlksqdsqkj')
// router.get('/', (req, res) => {
//   res.send('Bonjour VUE.JS');
// });

router.post('/', (req, res) => {
  axios.post(`https://twitter.com/${}`, {
    description: req.body.description,
    dechet: req.body.dechet,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  })
  res.sendStatus(200);

});


module.exports = router;