'use strict';

angular
    .module('aitamApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.login', {
                parent: 'app',
                url: '/login',
                views: {
                    '@': {
                        templateUrl: 'views/login/login.html',
                        controller: 'LoginCtrl',
                    }
                },
                resolve: {}
            });
    });