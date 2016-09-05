angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
        // Home
        .when('/', {
            templateUrl: 'view/home.html',
            controller: 'pageCtrl'
        })

        // Process
        .when('/process', {
            templateUrl: 'views/process.html',
            controller: 'processCtrl'
        })

        // Portfolio
        .when('/portfolio', {
            templateUrl: 'views/portfolio.html',
            controller: 'processCtrl'
        })

        // About
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'processCtrl'
        })

        // Contact
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'processCtrl'
        })

        // Projects ============================
        .when('/nwcpe', {
            templateUrl: 'views/nwcpe.html',
            controller: 'processCtrl'
        })

        // Error ===============================

        .otherwise('/404', {
          templateUrl: 'views/404.html',
            controller: 'processCtrl'
        });

        $locationProvider.html5Mode(true);
}]);
