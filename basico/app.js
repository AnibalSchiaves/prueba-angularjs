var appModule = angular.module('appModule', ['personListModule', 'personDetailModule', 'ngRoute']);

appModule.controller('CtrlPrincipal', function CtrlPrincipal($scope) {
    $scope.mensaje = "Un mensaje de ejemplo";
});	

appModule.component('saludo', {
    template: 'Hola {{$ctrl.user}} !!', //por defecto hacemos referencia a nuestro controller con $ctrl
    controller: function Saludo() {
        this.user = "Mundo";
    }
});