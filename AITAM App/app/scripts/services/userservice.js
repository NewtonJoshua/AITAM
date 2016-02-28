'use strict';

/**
 * @ngdoc service
 * @name aitamApp.userService
 * @description
 * # userService
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('userService', function ($localForage) {
        this.getUser = function () {
            return $localForage.getItem('userName').then(function (userName) {
                return userName;
            });
        };
        this.getId = function () {
            return $localForage.getItem('userId').then(function (userId) {
                return userId;
            });
        };
    });