'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:CreatetaskmodalCtrl
 * @description
 * # CreatetaskmodalCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('CreatetaskmodalCtrl', function ($scope, $uibModalInstance, taskList, taskCategory, currentTask, title) {
        $scope.title = title;
        $scope.task = currentTask ? angular.copy(currentTask) : {};
        $scope.taskCategory = taskCategory;
        $scope.taskList = taskList;

        $scope.ok = function () {
            $uibModalInstance.close($scope.task);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });