'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:DeletetaskmodalctrlCtrl
 * @description
 * # DeletetaskmodalctrlCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('DeletetaskmodalCtrl', function ($scope, $uibModalInstance, selectedTaskTitle, selectedTaskDisplayId) {

        $scope.title = selectedTaskTitle;

        $scope.displayId = selectedTaskDisplayId;

        $scope.ok = function () {
            $uibModalInstance.close(true);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });