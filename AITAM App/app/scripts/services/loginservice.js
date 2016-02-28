'use strict';

/**
 * @ngdoc service
 * @name aitamApp.loginService
 * @description
 * # loginService
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('loginService', function ($http, $localForage, ENV) {
        this.login = function (user) {
            return $http.post(ENV.apiEndpoint + 'action=Login&EmpID=' + user.username + '&pw=' + user.password)
                .then(function (response) {
                    if (response.data.Login === 'incorrect') {
                        return false;
                    } else {
                        $localForage.setItem('userId', user.username);
                        return $localForage.setItem('userName', response.data.Login).then(function () {
                            return true;
                        });
                    }


                    // response also contains the total count of my and our tasks
                });
        };
    });