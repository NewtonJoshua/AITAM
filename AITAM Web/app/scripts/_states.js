'use strict';

angular
    .module('aitamApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('app', {
            url: '/app',
            abstract: true,
            controller: 'AppCtrl'
        });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    });