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

        //Load Google Chart
        google.charts.load('current', {
            'packages': ['gantt']
        });
        google.charts.setOnLoadCallback(function () {
            console.log('Google Chart Loaded');
        });

        //Initialize Socket.io
        socket.initSocket();

        $state.go('app.login');

        //Set Active Tab
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