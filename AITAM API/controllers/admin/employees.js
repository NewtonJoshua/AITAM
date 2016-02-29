'use strict';

var express = require('express'),
    router = express.Router(),
    user = require('../../models/users');

router.post('/', function (req, res) {

    user.getAll().then(function (result) {
        res.send({
            employees: result
        });
    });

});

module.exports = router;