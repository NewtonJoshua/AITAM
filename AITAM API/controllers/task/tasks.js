'use strict';

var express = require('express'),
    router = express.Router(),
    task = require('../../models/task'),
    project = require('../../models/project');

router.post('/create', function (req, res) {
    task.create(req.body).then(function (result) {
        console.log(result);
        project.addTask(result).then(function () {
            res.send({
                task: result
            });
        });
    });
});

router.post('/edit', function (req, res) {
    task.update(req.body).then(function (result) {
        res.send({
            task: result
        });
    });
});
//
//router.post('/getProjects', function (req, res) {
//
//    task.getAll().then(function (result) {
//        res.send({
//            projects: result
//        });
//    });
//
//});
module.exports = router;