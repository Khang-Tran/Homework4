var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Khangsflowershop', { title: 'Khangs Flowershop' })
});

/* GET users listing. */
router.get('/help', function(req, res, next) {
  res.render('khanghelp', { title: 'Khangs Flowershop' })
});

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('khangregister', { title: 'Khangs Flowershop' })
});

module.exports = router;
