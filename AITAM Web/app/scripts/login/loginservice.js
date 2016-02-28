'use strict';

/**
 * @ngdoc service
 * @name aitamApp.loginService
 * @description
 * # loginService
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('loginService', function ($http, ENV) {
        this.login = function (user) {
            return $http.post(ENV.apiEndpoint + '/login', user).then(function (res) {
                return res.data.login;
            });
        };

    });