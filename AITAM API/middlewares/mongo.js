'use strict';

var mongoDb;

module.exports = {
    setMongo: function (mongo) {
        mongoDb = mongo;
    },
    getMongo: function () {
        return mongoDb;
    }
};