'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:MynewCtrl
 * @description
 * # MynewCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('TaskslistCtrl', function($scope, taskListService, list) {

        function getTasks() {
            taskListService.getTaskList(list).then(function(tasks) {
                $scope.tasks = tasks;
            });
        }
        $scope.doRefresh = getTasks;
        getTasks();

    });