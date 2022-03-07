var express = require('express');
var router = express.Router();

const PRODUCT_SCHEMA = require('../models/products');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/products', (req,res) => {
  const NEW_PRODUCT = new PRODUCT_SCHEMA(req.body);

  return NEW_PRODUCT.save()
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        res.send(err.message);
      });
});

module.exports = router;
