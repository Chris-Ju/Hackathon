var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var data = require('../model/dataHandle');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/', function (req, res) {
  console.log(req.body);
  data.checkPass(req.body, function(val) {
    if (val) {
      res.status(200);
    } else {
      res.status(404);
    }
    res.end();
  });
});

module.exports = router;