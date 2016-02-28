'use strict';

angular
    .module('aitamApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.profile', {
                url: '/profile',
                views: {
                    '@': {
                        templateUrl: 'views/profile/profile.html',
                        controller: 'ProfileCtrl'
                    },
                    'my-profile@app.profile': {
                        templateUrl: 'views/profile/my-profile.html',
                        controller: 'MyProfileCtrl',
                    },
                    'notification@app.profile': {
                        templateUrl: 'views/profile/notification.html',
                        controller: 'NotificationCtrl',
                    },
                    'projects@app.profile': {
                        templateUrl: 'views/profile/projects.html',
                        controller: 'ProjectsCtrl',
                    },
                    'team@app.profile': {
                        templateUrl: 'views/profile/team.html',
                        controller: 'TeamCtrl',
                    }
                },
                resolve: {}
            });

    });