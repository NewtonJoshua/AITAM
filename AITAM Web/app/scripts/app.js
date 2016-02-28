'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('AppCtrl', function ($state, socket, $scope) {
        socket.initSocket();
        $state.go('app.login');

        function init() {
            $scope.profileActive = '';
            $scope.managerActive = '';
            $scope.setingsActive = '';
            $scope.taskActive = '';
        }

        $scope.setActive = function (activeTab) {
            init();
            $scope[activeTab] = 'active';
        };
    });