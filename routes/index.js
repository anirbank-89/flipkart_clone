var express = require('express');
var router = express.Router();

const USER = require('../controllers/Users');
const PRODUCT = require('../controllers/Product');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   console.log("Express is working.");
// });

router.use('/users', require('./users'));

router.post('/user/register', USER.register);
router.post('/user/login', USER.login);

router.get('/user/products', PRODUCT.getAllProducts);

module.exports = router;