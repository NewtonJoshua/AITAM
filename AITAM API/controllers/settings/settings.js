'use strict';

var express = require('express'),
    router = express.Router(),
    settings = require('../../models/settings');

router.post('/', function (req, res) {

    var initialSetting = {
        projectCategory: [
            'WebSite',
            'App',
            'm.WebSite',
            'Extension',
            'Internal'
        ],
        taskCategory: [
            'Initial Setup',
            'UX Design',
            'UI Development',
            'API Development',
            'Unit Testing',
            'Testing',
            'Other'
        ]
    };

    settings.getSettings().then(function (result) {
        if (result.length === 0) {
            settings.initialize(initialSetting).then(function (result) {
                res.send({
                    settings: result
                });
            });
        } else {
            res.send({
                settings: result
            });
        }
    });

});

module.exports = router;