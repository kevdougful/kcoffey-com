var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pagetitle: 'kcoffey.com' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { pagetitle: 'kcoffey.com' });
});

module.exports = router;
