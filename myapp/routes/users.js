var express = require('express');
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
  res.redirect('/');
})

module.exports = router;