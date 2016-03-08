'use strict';

/**
 * @ngdoc service
 * @name aitamApp.taskService
 * @description
 * # taskService
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('taskService', function ($http, ENV) {
        this.createTask = function (task) {
            return $http.post(ENV.apiEndpoint + '/task/create', task).then(function (res) {
                return res.data.task;
            });
        };
        this.editTask = function (task) {
            return $http.post(ENV.apiEndpoint + '/task/edit', task).then(function (res) {
                return res.data.task;
            });
        };
    });