'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:CreatetaskmodalCtrl
 * @description
 * # CreatetaskmodalCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('CreatetaskmodalCtrl', function ($scope, $uibModalInstance, taskList, taskCategory) {
        $scope.task = {};
        $scope.taskCategory = taskCategory;
        $scope.taskList = taskList;

        $scope.ok = function () {
            $uibModalInstance.close($scope.task);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });