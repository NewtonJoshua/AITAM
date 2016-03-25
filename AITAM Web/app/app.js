'use strict';

angular.module('aitamApp', [
    'ionic',
    'LocalForageModule',
    'config',
    'ui.router',
    'ui.bootstrap',
    'ngMessages',
    'ngAnimate',
    'angular-growl',
    'angular-loading-bar'
])

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

.config(['growlProvider', function (growlProvider) {
    growlProvider.onlyUniqueMessages(false);
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition('top-right');
}])

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

.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])

.config(['$localForageProvider', function ($localForageProvider) {
    $localForageProvider.setNotify(true, true); // itemSet, itemRemove
}]);