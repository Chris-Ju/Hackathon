var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var data = require('../model/dataHandle');
var router = express.Router();

router.use('/', bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('regist');
});

router.post('/', function (req, res) {
  console.log(req.body);
  data.insert(req.body, function(val) {
    if (val) {
      res.status(200);
    } else {
      res.status(404);
    }
    res.end();
  });
});


router.post('/username', function (req, res) {
  console.log(req.body);
  data.check(req.body, function(val) {
    if (val) {
      res.status(200);
    } else {
      res.status(404);
    }
    res.end();
  });
});

router.post('/phone', function (req, res) {
  console.log(req.body);
  data.check(req.body, function(val) {
    if (val) {
      res.status(200);
    } else {
      res.status(404);
    }
    res.end();
  });
});

router.post('/email', function (req, res) {
  console.log(req.body);
  data.check(req.body, function(val) {
    if (val) {
      res.status(200);
    } else {
      res.status(404);
    }
    res.end();
  });
});
module.exports = router;