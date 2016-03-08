'use strict';

var sockets = [];

module.exports = {
    initSocket: function (socket) {
        socket.emit('getUser');
        socket.on('getUser', function (user) {
            sockets[socket.id] = {
                socket: socket,
                user: user.userId
            };
            socket.handshake.session.user = user.userId;
            console.log('CONNECTED', 'User', user.userId, 'Socket:', socket.id, 'Session:', socket.handshake.sessionID);
        });
        socket.on('disconnect', function () {
            if (sockets[socket.id]) {
                console.log('DISCONNECTED', 'User', sockets[socket.id].user);
                delete sockets[socket.id];
            }
        });
    },
    getSockets: function () {
        return sockets;
    }

};