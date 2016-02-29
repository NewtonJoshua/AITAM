'use strict';

/**
 * @ngdoc service
 * @name aitamApp.settings
 * @description
 * # settings
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('setting', function ($http, ENV) {
        this.initiallize = function () {
            return $http.post(ENV.apiEndpoint + '/settings/getSettings').then(function (res) {
                return res.data.settings;
            });
        };
    });