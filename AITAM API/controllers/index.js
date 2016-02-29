'use strict';

var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

router.use(function timeLog(req, res, next) {
    console.log(req.session.user);
    res.header('Content-Type', 'application/xml');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    console.log('Time: ', Date.now(), req.url);
    next();
});

router.use('/login', require('./login/login'));
router.use('/settings/getSettings', require('./settings/settings'));
router.use('/employees', require('./admin/employees'));

module.exports = router;