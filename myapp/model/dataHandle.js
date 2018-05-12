var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


function insert(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        dbase.collection('user').insertOne(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                client.close();
                callback(false);
            }
            client.close();
            callback(true);
        });
    });
}

function check(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        dbase.collection('user').find(data).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                client.close();
                callback(false);
            }
            client.close();
            if (result.length == 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    });
}

function checkPass(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        dbase.collection('user').find(data).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                client.close();
                callback(false);
            }
            client.close();
            if (result.length == 0) {
                callback(false);
            } else {
                callback(true);
            }
        });
    });
}

function findOneStory(callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        var random = Math.random();
        var story = dbase.collection('story').findOne({"random":{"$lt":random}});
        if (story == null) {
            story = dbase.collection('story').findOne({"random":{"$gte":random}});
        }
        callback(story);
    });
}

function insertOneStory(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        dbase.collection('story').insertOne(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                client.close();
                callback(false);
            }
            client.close();
            callback(true);
        });
    });
}

function findOneCandy(callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        var random = Math.random();
        var candy = dbase.collection('candy').findOne({"random":{"$lt":random}});
        if (candy == null) {
            candy = dbase.collection('candy').findOne({"random":{"$gte":random}});
        }
        callback(candy);
    });
}

function insertOneCandy(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        dbase.collection('candy').insertOne(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                client.close();
                callback(false);
            }
            client.close();
            callback(true);
        });
    });
}

exports.insert = insert;
exports.check = check;
exports.checkPass = checkPass;
exports.findOneCandy = findOneCandy;
exports.findOneStory = findOneStory;
exports.insertOneCandy = insertOneCandy;
exports.insertOneStory = insertOneStory;