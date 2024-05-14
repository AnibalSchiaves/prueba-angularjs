angular.module('app', ['components'])
    .controller('BeerController', function($scope,$locale,$window) {
        $scope.beers = [0,1,2,3,4,5,6];
        console.log($locale.id);
        let lang = $window.navigator.language || $window.navigator.userLanguage;
        if (lang=='en-us') {
            $scope.beersForm = {
                0:'no beers',
                one:'{} beer',
                other:'{} beers'
            }
        } else {
            $scope.beersForm = {
                0:'sin cerveza',
                one:'{} cerveza',
                other:'{} cervezas'
            }
        }
    });