'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('LoginCtrl', function ($scope, loginService, $state, userService, socket) {
        $scope.user = {};
        $scope.login = function () {
            loginService.login($scope.user).then(function (user) {
                switch (user) {
                case 'wrongPassword':
                    $scope.wrongPassword = true;
                    break;
                case 'wrongUserName':
                    $scope.wrongUserName = true;
                    break;
                default:
                    userService.setUser(user, $scope.user.name)
                        .then(function () {
                            socket.initSocket();
                            $state.go('app.tasks');
                        });
                }
            });
        };

    });