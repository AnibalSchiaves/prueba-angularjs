angular.module('personListModule', []);

angular.module('personListModule')
    .component('personList', {
        templateUrl: 'person-list/person-list.template.html',
        controller: ['$http', 
            function PersonListController($http) {
                this.personas = [];

                $http.get("person-list/data.json").then((response) => {
                    this.personas = response.data;
                });

                this.sort = "toString()";

                this.formatAsImg = function(nombre) {
                    return "img/"+nombre.replace(/ /g, "").normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()+".jpeg";
                }

                this.formatAsId = function(nombre) {
                    return nombre.replace(/ /g, "").normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
                }
            }
        ]
    })