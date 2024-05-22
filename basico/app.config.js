angular.module('appModule')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
            .when('/personas', {
                template: '<person-list></person-list>'
            })
            .when('/personas/:id', {
                template: '<person-detail></person-detail>'
            })
            .otherwise('/personas');
    }]);