'use strict';

/**
 * @ngdoc service
 * @name aitamApp.projectService
 * @description
 * # projectService
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('projectService', function ($http, ENV) {
        this.createProject = function (project) {
            return $http.post(ENV.apiEndpoint + '/project/create', project).then(function (res) {
                return res.data.project;
            });
        };
        this.editProject = function (project) {
            return $http.post(ENV.apiEndpoint + '/project/edit', project).then(function (res) {
                return res.data.project;
            });
        };
    });