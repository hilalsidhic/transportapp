var express = require('express');
var router = express.Router();
var axios = require("axios").default;

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
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': '4038c84751msh0760b4cd497bc17p11c57cjsnca59824b3cb4'
    }
  };
  
  axios.request(options).then(function (response) {
    const places = response.data;
     res.render('user/searchPlaces', {places})
    // res.json(places.Places);
  }).catch(function (error) {
    console.error(error);
  });
})



module.exports = router;
