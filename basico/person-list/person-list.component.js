angular.module('personListModule', ['personUtils']);

angular.module('personListModule')
    .component('personList', {
        templateUrl: 'person-list/person-list.template.html',
        controller: ['$http', 'personUtils', 
            function PersonListController($http, personUtils) {
                this.personas = [];
                var ctrl = this;
                $http.get("person-list/data.json").then((response) => {
                    let personas = response.data;
                    angular.forEach(personas, function(persona, i) {
                        let personaObj = {};
                        personaObj.nombre = persona;
                        personaObj.id = personUtils.formatAsId(persona);
                        personaObj.img = personUtils.formatAsImg(persona);
                        ctrl.personas.push(personaObj);
                    })
                });

                this.sort = "nombre";

                this.formatAsImg = personUtils.formatAsImg;

                this.formatAsId = personUtils.formatAsId;
            }
        ]
    })