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

function findOneStory(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        var random = Math.random();
        dbase.collection('story').find({
            "username": {
                "$ne": data.username
            }
        }).toArray(function (err, result) {
            client.close();
            callback(result[Math.floor(Math.random() * result.length)]);
        });
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

function findOneCandy(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        var random = Math.random();
        dbase.collection('candy').find({
            "username": {
                "$ne": data.username
            }
        }).toArray(function (err, result) {
            client.close();
            callback(result[Math.floor(Math.random() * result.length)]);
        });
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

function insertComment(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        dbase.collection('comment').insertOne(data, function (err, result) {
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

function findComment(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        dbase.collection("comment").find(data).toArray(function (err, result) {
            client.close();
            callback(result);
        });
    });
}

function findAllCandy(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        var random = Math.random();
        dbase.collection('candy').find(data).toArray(function (err, result) {
            client.close();
            callback(result);
        });
    });
}


function findAllStory(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        var random = Math.random();
        dbase.collection('story').find(data).toArray(function (err, result) {
            client.close();
            callback(result);
        });
    });
}

function addCommentNumber(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        try {

            dbase.collection('story').update(data, {
                $inc: {
                    commentNumber: 1
                }
            });
        } catch (e) {
            dbase.collection('candy').update(data, {
                $inc: {
                    commentNumber: 1
                }
            });
        }
        callback();
    });
}

function findUser(data, callback) {
    MongoClient.connect(url, function (err, client) {
        var dbase = client.db('mytestingdb');
        var random = Math.random();
        dbase.collection('user').find(data).toArray(function (err, result) {
            client.close();
            callback(result[0]);
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
exports.insertComment = insertComment;
exports.findComment = findComment;
exports.findAllCandy = findAllCandy;
exports.findAllStory = findAllStory;
exports.addCommentNumber = addCommentNumber;
exports.findUser = findUser;