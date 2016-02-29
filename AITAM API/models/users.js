'use strict';

var db = require('../middlewares/mongo').getMongo(),
    crypto = require('crypto');

var hash = function (password) {
    if (typeof password !== 'string') {
        password = password.toString();
    }
    return crypto.createHash('sha256').update(password).digest('hex');
};

var Schema = db.Schema;

var userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    manager: Boolean,
    meta: {
        age: Number,
        website: String,
        PAN: String,
        email: String,
        phone: Number
    },
    device: {
        uuid: [String],
        socketId: [String],
        pushToken: [String]
    },
    createdAt: Date,
    updatedAt: Date
});

userSchema.methods = {
    setCreatedDate: function () {
        this.createdAt = new Date();
    },
    setUpdatedDate: function () {
        this.updatedAt = new Date();
    }
};

var User = db.model('User', userSchema);

module.exports = {
    create: function (user) {
        user.password = hash(user.password);
        var newUser = new User(user);
        newUser.setCreatedDate();
        newUser.save(function (err, result) {
            if (err) return console.error(err);
            console.log('DB', result.name, ' - is created');
        });
    },
    getOne: function (name) {
        console.log('DB', 'fetching details of - ', name);
        return User.find({
            username: name
        });
    },
    getAll: function () {
        console.log('DB', 'fetching employees');
        return User.find({});
    },
    encrypt: hash
};