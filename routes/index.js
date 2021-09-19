var express = require('express');
var router = express.Router();
var axios = require("axios").default;
var rapidapi=require("../apikey.js")

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

router.post('/searchPlace',(req, res, next) => {
  var options = {
    method: 'GET',
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${req.body.country}/${req.body.currency}/en-GB/`,
    params: {query: req.body.query},
    headers: {
      'x-rapidapi-host': rapidapi.rapidapihost,
      'x-rapidapi-key': rapidapi.rapidapikey
    }
  };
  
  axios.request(options).then(function (response) {
  
    // const places = response.data;
    //  res.render('user/searchPlaces', {places})
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})



module.exports = router;
