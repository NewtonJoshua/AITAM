'use strict';

angular
    .module('aitamApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.tasks', {
                url: '/tasks',
                views: {
                    '@': {
                        templateUrl: 'views/task/taskBoard.html',
                        controller: 'TaskboardCtrl'
                    },
                    'create-task@app.tasks': {
                        templateUrl: 'views/task/create-task.html',
                        controller: 'CreateTaskCtrl',
                    },
                    'my-tasks@app.tasks': {
                        templateUrl: 'views/task/my-tasks.html',
                        controller: 'MyTasksCtrl',
                    },
                    'perfometer@app.tasks': {
                        templateUrl: 'views/task/perfometer.html',
                        controller: 'PerfometerCtrl',
                    },
                    'task-count@app.tasks': {
                        templateUrl: 'views/task/taskcount.html',
                        controller: 'TaskcountCtrl',
                    },
                    'timesheet@app.tasks': {
                        templateUrl: 'views/task/timesheet.html',
                        controller: 'TimesheetCtrl',
                    },
                    'archived-task@app.tasks': {
                        templateUrl: 'views/task/archived-task.html',
                        controller: 'ArchivedTaskCtrl',
                    }
                },
                resolve: {}
            });

    });