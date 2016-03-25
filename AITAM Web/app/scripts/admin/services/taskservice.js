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
            return $http.post(ENV.apiEndpoint + '/task/create', task).then(function (res, error) {
                if (error) {
                    console.log(error);
                }
                return res.data.task;
            });
        };
        this.editTask = function (task) {
            return $http.post(ENV.apiEndpoint + '/task/edit', task).then(function (res) {
                return res.data.task;
            });
        };
        this.editTasks = function (tasks) {
            return $http.post(ENV.apiEndpoint + '/task/editTasks', tasks).then(function (res) {
                return res.data.tasks;
            });
        };
        this.deleteTask = function (task) {
            return $http.post(ENV.apiEndpoint + '/task/delete', task).then(function (res, error) {
                if (error) {
                    console.log(error);
                }
                return res.data.deleted;
            });
        };
    });