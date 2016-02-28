'use strict';

var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    session = require('express-session'),
    sharedsession = require('express-socket.io-session');

//MongoDb
var db = require('mongoose'),
    MongoStore = require('connect-mongo')(session),
    setMongo = require('./middlewares/mongo').setMongo;
db.connect('mongodb://localhost:27017/aitam');
setMongo(db);

//Session
var sessionMiddleWare = session({
    secret: 'AITAM',
    store: new MongoStore({
        mongooseConnection: db.connection
    }),
    resave: false,
    saveUninitialized: true
});
app.use(sessionMiddleWare);

//Socket.io
var io = require('socket.io').listen(server),
    initSocket = require('./middlewares/socket').initSocket;
io.use(sharedsession(sessionMiddleWare));
io.on('connection', function (socket) {
    initSocket(socket, io);
});

//Express Server
app.use(require('./controllers/index'));
server.listen(8101, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('AITAM API listening at http://%s:%s', host, port);
});