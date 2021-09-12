var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/index');
});

router.get('/optionPage', function(req, res, next) {
  res.render('user/option')
})

module.exports = router;
