'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:CreateprojectmodalCtrl
 * @description
 * # CreateprojectmodalCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('CreateprojectmodalCtrl', function ($scope, $uibModalInstance, projectCategory, title, currrentProject) {

        var blankProject = {
            category: '',
            title: '',
            endDate: '',
            startDate: ''
        };

        $scope.project = currrentProject ? angular.copy(currrentProject) : blankProject;
        if (currrentProject) {
            $scope.project.startDate = moment($scope.project.startDate).toDate();
            $scope.project.endDate = moment($scope.project.endDate).toDate();
        }

        //Title - Create/Edit
        $scope.title = title;
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