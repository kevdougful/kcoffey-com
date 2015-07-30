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

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { pagetitle: 'kcoffey.com' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { pagetitle: 'kcoffey.com' });
});

module.exports = router;
