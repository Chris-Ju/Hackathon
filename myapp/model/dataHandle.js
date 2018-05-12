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

exports.insert = insert;
exports.check = check;
exports.checkPass = checkPass;