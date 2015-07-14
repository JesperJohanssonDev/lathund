 (function() {
    "use strict";

    angular.module('lathund', [
        'ngRoute',
        'ngResource',
    ])

    .config(function($routeProvider,$locationProvider) {
        
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when('/stageOne', {
                templateUrl: '/views/StageOne.html',
                controller: 'FirstController',
                level:1
        })

        .otherwise({ redirectTo: '/stageOne'
        });

    });
    
})();