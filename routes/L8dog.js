var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  const data = JSON.parse(body);
  res.json(data);
  }
  });
  })

  module.exports = router;

// let img = document.getElementById("image");

// //const request = new XMLHttpRequest();
// request.open("GET", "https://dog.ceo/api/breeds/image/random");
// request.send();

// request.addEventListener("load", function () {
//   const apiData = JSON.parse(this.responseText);
//   img.src = apiData.message;
// });

//  https://www.azukipan.com/posts/javascript-ajax-api/