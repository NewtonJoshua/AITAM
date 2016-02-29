'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:CreateprojectmodalCtrl
 * @description
 * # CreateprojectmodalCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('CreateprojectmodalCtrl', function ($scope, $uibModalInstance, projectCategory) {

        $scope.project = {
            category: '',
            title: '',
            endDate: '',
            startDate: ''
        };

        //Category
        $scope.projectCategory = projectCategory;

        //Dates
        $scope.startDate = moment().toDate();
        $scope.openStart = function () {
            $scope.popupStart.opened = true;
        };
        $scope.popupStart = {
            opened: false
        };
        $scope.openEnd = function () {
            $scope.popupEnd.opened = true;
        };
        $scope.popupEnd = {
            opened: false
        };

        $scope.today = moment().toDate();
        $scope.dateChange = function () {
            var daysCount = moment($scope.project.endDate).diff(moment($scope.project.startDate), 'days');
            return (daysCount > 0) ? daysCount : 0;
        };

        $scope.ok = function () {
            $uibModalInstance.close($scope.project);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });