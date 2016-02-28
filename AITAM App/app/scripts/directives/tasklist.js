'use strict';

/**
 * @ngdoc directive
 * @name aitamApp.directive:taskList
 * @description
 * # taskList
 */
angular.module('aitamApp')
    .directive('taskList', function() {
        return {
            templateUrl: '../../views/tasklist.html',
            restrict: 'E',
            scope: {
                tasks: '=',
                doRefresh: '='
            }
        };
    });