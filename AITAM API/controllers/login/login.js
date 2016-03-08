'use strict';

var express = require('express'),
    router = express.Router(),
    user = require('../../models/users');

router.post('/', function (req, res) {

    //    var newUser = {
    //        name: 'UX Designer',
    //        username: 100001,
    //        password: 100001,
    //        manager: false
    //    };
    //    user.create(newUser);

    user.getOne(req.body.name).then(function (result) {
        var response;
        if (result.length === 0) {
            response = 'wrongUserName';
        } else {
            response = result.password === user.encrypt(req.body.password) ? result.name : 'wrongPassword';
        }
        res.send({
            login: response
        });
    });

});

module.exports = router;