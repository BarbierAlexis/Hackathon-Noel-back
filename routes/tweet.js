const express = require('express');
const router = express.Router();

const Twit = require ('twit')

const T = new Twit ({
  consumer_key: '71TUkzS2JvIk73stRJiunEp4K',
  consumer_secret: '9T2yY9lq1JarKzp412k9f4mwPu4pgQLBXUFueOXsCj2BvyVp7X',
  access_token: '1207336111477051394-rdfC1vkaM348UXhLivNQ9uGGSBkaoi',
  access_token_secret: 'E9puHsBjB579pM82Hpwqq8G3kY9a4nEj7gqh1oVouXR1m'
})

console.log('toto')

router.post('/', (req, res) => {
  T.post('/statuses/update', { status: `${ JSON.stringify(req.body) }` }, (err, data, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(req.body)
      res.sendStatus(200);
    }
  });
});


 
module.exports = router;