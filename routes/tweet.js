const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Bonjour VUE.JS');
// });

router.post('/', (req, res) => {
  res.send(`${req.body.description}, ${req.body.dechet}`)
});

module.exports = router;