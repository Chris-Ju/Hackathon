var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var data = require('../model/dataHandle');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log(req.body);
    res.status(200);
    res.end();
});

module.exports = router;