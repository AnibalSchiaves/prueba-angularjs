angular.module('personDetailModule', ['ngRoute','personUtils']);

angular.module('personDetailModule')
    .component('personDetail', {
        templateUrl: '/person-detail/person-detail.template.html',
        controller: ['$routeParams', '$http', 'personUtils', function personDetail($routeParams, $http, personUtils) {
            let url = 'person-detail/'+$routeParams.id+'.json';
            var ctrl = this;
            $http.get(url)
                .then(function(response) {
                    ctrl.persona = response.data;
                    ctrl.persona.img = personUtils.formatAsImg(ctrl.persona.nombre);
                }, function(error) {
                    console.log('Ocurrió un error al recuperar los datos de la persona: ',error);
                    ctrl.error = 'No se pudo recuperar los datos de la persona';
                });

        }]
    });