'use strict';

var express = require('express'),
    router = express.Router(),
    project = require('../../models/project'),
    task = require('../../models/task');

router.post('/create', function (req, res) {
    project.create(req.body).then(function (result) {
        res.send({
            project: result
        });
    });
});

router.post('/edit', function (req, res) {
    project.update(req.body).then(function (result) {
        res.send({
            project: result
        });
    });
});

router.post('/delete', function (req, res) {
    project.delete(req.body).then(function (result) {
        task.deleteTasks(req.body.tasks).then(function () {
            res.send({
                project: result
            });
        });
    });
});

router.post('/getProjects', function (req, res) {
    project.getAll().then(function (projects) {
        res.send({
            projects: projects
        });
    });
});

module.exports = router;