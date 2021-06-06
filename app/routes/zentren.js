var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('zentren', { Zentren: req });
});

module.exports = router;