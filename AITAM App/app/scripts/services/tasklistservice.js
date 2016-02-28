'use strict';

/**
 * @ngdoc service
 * @name aitamApp.taskListService
 * @description
 * # taskListService
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('taskListService', function ($http, ENV, $rootScope, userService, taskListValue) {

        this.getTaskList = function (list) {

            var taskList = taskListValue[list];

            return userService.getId().then(function (EmpID) {
                return $http.post(ENV.apiEndpoint + 'EmpID=' + EmpID + '&' + 'action=' + taskList.task).then(function (response) {
                    $rootScope.$broadcast('scroll.refreshComplete');

                    return {
                        list: response.data[taskList.task],
                        settings: {
                            title: taskList.title,
                            field: taskList.field,
                            data: taskList.data
                        }
                    };

                });
            });
        };

    });