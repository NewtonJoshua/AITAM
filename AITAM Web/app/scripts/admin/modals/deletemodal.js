'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:DeletetaskmodalctrlCtrl
 * @description
 * # DeletetaskmodalctrlCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('DeletemodalCtrl', function ($scope, $uibModalInstance, selectedTitle) {

        $scope.title = selectedTitle;

        $scope.ok = function () {
            $uibModalInstance.close(true);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });