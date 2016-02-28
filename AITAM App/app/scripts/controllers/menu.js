'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('AppCtrl', function($scope, user, deviceService) {

        $scope.user = user;
        //TODO: to be validated
        $scope.manager = true;
        //TODO: to be obtained from server
        $scope.newCount = '';
        $scope.ourReviewCount = '';


        $scope.$on('LocalForageModule.setItem', function(event, value) {
            switch (value.key) {
                case 'userName':
                    $scope.user = value.newvalue;
            }
        });

        $scope.$on('LocalForageModule.removeItem', function(event, value) {
            if (value.key === 'userName') {
                $scope.user = false;
            }
        });

        $scope.exitApp = deviceService.exitApp;

        function receiveMessage(event) {
            document.getElementById('time').innerHTML = event.data;
        }
        window.addEventListener('message', receiveMessage, false);
    });