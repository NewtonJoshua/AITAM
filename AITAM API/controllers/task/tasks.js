'use strict';

var express = require('express'),
    router = express.Router(),
    task = require('../../models/task'),
    project = require('../../models/project');

router.post('/create', function (req, res) {
    task.create(req.body).then(function (result) {
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

router.post('/editTasks', function (req, res) {
    var tasks = req.body;
    var results = [];
    tasks.forEach(function (taskToUpdate) {
        task.update(taskToUpdate).then(function (result) {
            results.push(result);
            if (tasks.length === results.length) {
                res.send({
                    tasks: results
                });
            }
        });
    });
});

router.post('/getTasks', function (req, res) {
    task.getAll().then(function (result) {
        res.send({
            tasks: result
        });
    });
});
module.exports = router;