'use strict';

/**
 * @ngdoc service
 * @name aitamApp.settings
 * @description
 * # settings
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('setting', function ($http, ENV, $q) {
        var settingsReq = $http.post(ENV.apiEndpoint + '/settings/getSettings');
        var employeesReq = $http.post(ENV.apiEndpoint + '/employees');
        var projectsReq = $http.post(ENV.apiEndpoint + '/project/getProjects');
        var tasksReq = $http.post(ENV.apiEndpoint + '/task/getTasks');
        this.initiallize = function () {
            return $q.all([settingsReq, employeesReq, projectsReq, tasksReq]).then(function (res) {
                return {
                    settings: res[0].data.settings[0],
                    employees: res[1].data.employees,
                    projects: res[2].data.projects,
                    tasks: res[3].data.tasks
                };
            });
        };
    });