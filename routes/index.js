var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/michu', function(req, res, next) {
  res.render('index', { title: 'michu' });
});



module.exports = router;
