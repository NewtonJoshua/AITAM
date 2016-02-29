'use strict';

angular.module('aitamApp', [
    'ionic',
    'LocalForageModule',
    'config',
    'ui.router',
    'ui.bootstrap',
    'ngMessages',
    'ngAnimate'
])

.run(function () {
    google.charts.load('current', {
        'packages': ['gantt']
    });
    google.charts.setOnLoadCallback(function () {
        console.log('Google Chart Loaded');
    });
})

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($httpProvider) {
    $httpProvider.interceptors.push(function ($rootScope) {
        return {
            request: function (config) {
                $rootScope.$broadcast('loading:show');
                return config;
            },
            response: function (response) {
                $rootScope.$broadcast('loading:hide');
                return response;
            }
        };
    });
})

.run(function ($rootScope, $ionicLoading) {
    $rootScope.$on('loading:show', function () {
        $ionicLoading.show({
            // The text to display in the loading indicator
            content: '<i class=icon ion-ios7-refreshing></i> Loading',

            // The animation to use
            animation: 'fade-in',

            // Will a dark overlay or backdrop cover the entire view
            showBackdrop: false,

            // The maximum width of the loading indicator
            // Text will be wrapped if longer than maxWidth
            maxWidth: 200,

            // The delay in showing the indicator
            showDelay: 10
        });
    });

    $rootScope.$on('loading:hide', function () {
        $ionicLoading.hide();
    });
})

.config(['$localForageProvider', function ($localForageProvider) {
    $localForageProvider.setNotify(true, true); // itemSet, itemRemove
}]);