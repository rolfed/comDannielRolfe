app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        // Home
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'pageCtrl'
        })

        // Process
        .when('/process', {
            templateUrl: 'partials/process.html',
            controller: 'processCtrl'
        })

        // Portfolio
        .when('/portfolio', {
            templateUrl: 'partials/portfolio.html',
            controller: 'processCtrl'
        })

        // About
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'processCtrl'
        })

        // Contact
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'processCtrl'
        })

        // Projects ============================
        .when('/nwcpe', {
            templateUrl: 'partials/nwcpe.html',
            controller: 'processCtrl'
        })

        // Error ===============================

        .otherwise('/404', {
            templateUrl: 'partials/404.html',
            controller: 'processCtrl'
        });
}]);
