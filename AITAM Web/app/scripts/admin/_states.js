'use strict';

angular
    .module('aitamApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.manager', {
                url: '/manager',
                views: {
                    '@': {
                        templateUrl: 'views/admin/manager.html',
                        controller: 'ManagerCtrl'
                    },
                    'archived-projects@app.manager': {
                        templateUrl: 'views/admin/archived-projects.html',
                        controller: 'ArchivedProjectsCtrl',
                    },
                    'edit-projects@app.manager': {
                        templateUrl: 'views/admin/editproject.html',
                        controller: 'EditprojetCtrl',
                    },
                    'open-tasks@app.manager': {
                        templateUrl: 'views/admin/open-tasks.html',
                        controller: 'OpenTasksCtrl',
                    },
                    'review-tasks@app.manager': {
                        templateUrl: 'views/admin/review-tasks.html',
                        controller: 'ReviewTasksCtrl',
                    }
                },
                resolve: {}
            });

    });