var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var data = require('../model/dataHandle');
var router = express.Router();

var session = require('express-session');
var FileStore = require('session-file-store')(session);

router.use(session({
  secret: 'users',  // 用来对session id相关的cookie进行签名
  store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
  saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
  resave: false,  // 是否每次都重新保存会话，建议false
  cookie: {
      maxAge: 24 * 60 * 60 * 1000  // 有效期，单位是毫秒
  }
}));

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
      req.session.user = req.body.username;
      res.redirect('/user');
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