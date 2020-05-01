var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('SuperCoolName', { title: 'I Have No Clue What to Call this' })
});

module.exports = router;
