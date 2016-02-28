'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('LoginCtrl', function($scope, loginService, deviceService,
        $state, $ionicPopup, $ionicHistory) {
        $scope.user = {};

        $scope.doLogin = function() {
            loginService.login($scope.user).then(function(authorized) {
                if (authorized) {
                    $ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    $state.go('app.main');
                } else {
                    $ionicPopup.alert({
                        title: 'Invalid Credentials',
                        template: 'The username or password is inorrect. \n Kindly enter valid credentials.'
                    }).then(function() {
                        $scope.user.password = '';
                    });
                }
            });
        };

        $scope.exitApp = deviceService.exitApp;
    });