'use strict';
angular.module('app', ['ngRoute']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: '/views/dashboard.html', controller: 'DashboardCtrl'});
        $routeProvider.when('/edit_certificate/', {templateUrl: '/views/edit_certificate.html', controller: 'EditCertificateCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
    }])