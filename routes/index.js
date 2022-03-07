var express = require('express');
var router = express.Router();

const USER = require('../controllers/Users');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   console.log("Express is working.");
// });

router.use('/users', require('./users'));

router.post('/register', USER.register);

module.exports = router;