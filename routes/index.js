var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/index');
});

router.get('/optionPage', function(req, res, next) {
  res.render('user/option')
})

router.get('/airplane', function(req, res, next) {
  res.render('user/airplane')
})

router.get('/countrylistapi',(req, res, next) => {
  res.json('https://api.printful.com/countries')
})

module.exports = router;
