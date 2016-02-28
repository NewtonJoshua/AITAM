'use strict';

angular.module('aitamApp', ['ionic', 'LocalForageModule', 'config'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($httpProvider) {
    $httpProvider.interceptors.push(function($rootScope) {
        return {
            request: function(config) {
                $rootScope.$broadcast('loading:show');
                return config;
            },
            response: function(response) {
                $rootScope.$broadcast('loading:hide');
                return response;
            }
        };
    });
})

.run(function($rootScope, $ionicLoading) {
    $rootScope.$on('loading:show', function() {
        $ionicLoading.show({
            // The text to display in the loading indicator
            content: '<i class=icon ion-ios7-refreshing></i> Loading',

            // The animation to use
            animation: 'fade-in',

            // Will a dark overlay or backdrop cover the entire view
            showBackdrop: false,

            // The maximum width of the loading indicator
            // Text will be wrapped if longer than maxWidth
            maxWidth: 200,

            // The delay in showing the indicator
            showDelay: 10
        });
    });

    $rootScope.$on('loading:hide', function() {
        $ionicLoading.hide();
    });
})

.config(['$localForageProvider', function($localForageProvider) {
    $localForageProvider.setNotify(true, true); // itemSet, itemRemove
}])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'views/menu.html',
        controller: 'AppCtrl',
        resolve: {
            user: function(userService) {
                return userService.getUser().then(function(userName) {
                    return userName;
                });
            },
            deviceInfo: function(deviceService) {
                return deviceService.getDeviceInfo();
            }
        }
    })

    //Main

    .state('app.main', {
        url: '/main',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }
        },
        resolve: {
            user: function(userService) {
                return userService.getUser().then(function(userName) {
                    return userName;
                });
            }
        }
    })

    .state('app.login', {
        url: '/login',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            }
        }
    })

    .state('app.mytasks', {
        url: '/myTasks',
        views: {
            'menuContent': {
                templateUrl: 'views/mytasks.html',
                controller: 'MytasksCtrl'
            }
        }
    })

    .state('app.ourtasks', {
        url: '/ourTasks',
        views: {
            'menuContent': {
                templateUrl: 'views/ourtasks.html',
                controller: 'OurtasksCtrl'
            }
        }
    })

    // myTasks

    .state('app.mytasks.summary', {
        url: '/summary',
        views: {
            'tab-mysummary': {
                templateUrl: 'views/mysummary.html',
                controller: 'MysummaryCtrl'
            }
        }
    })

    .state('app.mytasks.new', {
        url: '/new',
        views: {
            'tab-mynew': {
                templateUrl: 'views/tasks.html',
                controller: 'TaskslistCtrl'
            }
        },
        resolve: {
            list: function() {
                return 'myNew';
            }
        }
    })

    .state('app.mytasks.open', {
        url: '/open',
        views: {
            'tab-myopen': {
                templateUrl: 'views/tasks.html',
                controller: 'TaskslistCtrl'
            }
        },
        resolve: {
            list: function() {
                return 'myOpen';
            }
        }
    })

    .state('app.mytasks.archive', {
        url: '/archive',
        views: {
            'tab-myarchive': {
                templateUrl: 'views/tasks.html',
                controller: 'TaskslistCtrl'
            }
        },
        resolve: {
            list: function() {
                return 'MyArchive';
            }
        }
    })

    // ourTasks

    .state('app.ourtasks.summary', {
        url: '/summary',
        views: {
            'tab-summary': {
                templateUrl: 'views/oursummary.html',
                controller: 'OursummaryCtrl'
            }
        }
    })

    .state('app.ourtasks.review', {
        url: '/review',
        views: {
            'ourtabs-review': {
                templateUrl: 'views/tasks.html',
                controller: 'TaskslistCtrl'
            }
        },
        resolve: {
            list: function() {
                return 'ourReview';
            }
        }
    })

    .state('app.ourtasks.open', {
        url: '/open',
        views: {
            'ourtabs-open': {
                templateUrl: 'views/tasks.html',
                controller: 'TaskslistCtrl'
            }
        },
        resolve: {
            list: function() {
                return 'ourOpen';
            }
        }
    })

    .state('app.ourtasks.archive', {
        url: '/archive',
        views: {
            'ourtabs-archive': {
                templateUrl: 'views/tasks.html',
                controller: 'TaskslistCtrl'
            }
        },
        resolve: {
            list: function() {
                return 'ourArchive';
            }
        }
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main');
});