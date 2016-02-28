'use strict';

angular
    .module('aitamApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.settings', {
                url: '/settings',
                views: {
                    '@': {
                        templateUrl: 'views/settings/settings.html',
                        controller: 'SettingsCtrl'
                    },
                    'rating@app.settings': {
                        templateUrl: 'views/settings/rating.html',
                        controller: 'RatingCtrl',
                    },
                    'employees@app.settings': {
                        templateUrl: 'views/settings/employees.html',
                        controller: 'EmployeesCtrl',
                    },
                    'holidays@app.settings': {
                        templateUrl: 'views/settings/holidays.html',
                        controller: 'HolidaysCtrl',
                    },
                    'project-category@app.settings': {
                        templateUrl: 'views/settings/project-category.html',
                        controller: 'ProjetCategoryCtrl',
                    },
                    'task-category@app.settings': {
                        templateUrl: 'views/settings/task-category.html',
                        controller: 'TaskCategoryCtrl',
                    }
                },
                resolve: {}
            });

    });