'use strict';

/**
 * @ngdoc service
 * @name aitamApp.deviceService
 * @description
 * # deviceService
 * Service in the aitamApp.
 */
angular.module('aitamApp')
    .service('deviceService', function($ionicPopup) {

        this.getDeviceInfo = function() {
            var device = ionic.Platform.device();
            return {
                //network: navigator.connection.type,
                model: device.model,
                platform: device.platform,
                uuid: device.uuid
            };
        };

        this.exitApp = function() {
            $ionicPopup.confirm({
                title: 'EXIT',
                subTitle: 'Exit AITAM',
                template: 'Are you sure you want to Exit AITAM?',
                buttons: [{
                    text: 'Wanna Stay'
                }, {
                    text: '<b>Damn Sure</b>',
                    type: 'button-navy',
                    onTap: function() {
                        ionic.Platform.exitApp();
                    }
                }]
            });

        };
    });