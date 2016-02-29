'use strict';

/**
 * @ngdoc service
 * @name aitamApp.socket
 * @description
 * # socket
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('socket', function (ENV, userService) {

        this.connection = null;

        this.initSocket = function () {
            var socket = this.connection || io.connect(ENV.apiEndpoint);
            socket.on('getUser', function () {
                userService.getId().then(function (userId) {
                    socket.emit('getUser', {
                        userId: userId
                    });
                });
            });
            this.connection = socket;
        };

    });