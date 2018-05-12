var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var data = require('../model/dataHandle');

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

/* GET users listing. */
router.get('/', function (req, res, next) {
  if(!!req.session.user) {
    res.render('user');
  } else {
    res.redirect('/');
  }
});

router.post('/loginout', function (req, res, next) {
  req.session.destroy();
  res.status(200);
  res.end();
});

router.post('/insertStory', function (req, res, next) {
  console.log(req.body);
  var user = req.session.user;
  var dt = req.body;
  dt.username = user;
  data.insertOneStory(dt, function(val) {
    if(val) {
      res.status(200);
    } else {
      res.status(404);
    }
    res.end();
  });
});

router.post('/insertCandy', function (req, res, next) {
  console.log(req.body);
  var user = req.session.user;
  var dt = req.body;
  dt.username = user;
  data.insertOneCandy(dt, function(val) {
    if(val) {
      res.status(200);
    } else {
      res.status(404);
    }
    res.end();
  });
});

router.post('/findStory', function (req, res, next) {
  data.findOneStory(function(result) {
    console.log(result);
    res.status(200).json(result);
    res.end();
  });
});

router.post('/findCandy', function (req, res, next) {
  data.findOneCandy(function(result) {
    console.log(result);
    res.status(200).json(result);
    res.end();
  });
});

router.post('/comment', function (req, res, next) {
  var dt = req.body;
  dt.user = req.session.username;
  data.insertComment(dt, function(val) {
      if(val) {
        res.status(200);
      } else {
        res.status(404);
      }
      res.end();
  });
});

module.exports = router;