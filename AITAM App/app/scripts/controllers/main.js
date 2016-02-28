'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('MainCtrl', function($scope, $ionicPopup, $ionicHistory,
        $state, $localForage, user, deviceInfo) {
        $scope.deviceInfo = deviceInfo;

        function goToLogin() {
            $ionicHistory.nextViewOptions({
                disableBack: true,
                disableAnimate: true
            });
            $localForage.removeItem('userName');
            $localForage.clear();
            $state.go('app.login');
        }

        if (user) {
            $scope.user = user;
        } else {
            goToLogin();
        }
        $scope.logoff = function() {
            $ionicPopup.confirm({
                title: 'Switch User',
                subTitle: 'I am not ' + user,
                template: 'Are you sure you want to Login to AITAM as another user?',
                buttons: [{
                    text: 'Not Really'
                }, {
                    text: '<b>I am sure</b>',
                    type: 'button-navy',
                    onTap: function() {
                        goToLogin();

                    }
                }]

            });
        };

    });