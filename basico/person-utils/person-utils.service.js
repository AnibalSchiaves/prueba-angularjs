angular.module('personUtils', []);
angular.module('personUtils')
    .service('personUtils', function personUtils() {

        this.formatAsImg = function(nombre) {
            return "img/"+nombre.replace(/ /g, "").normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()+".jpeg";
        }

        this.formatAsId = function(nombre) {
            return nombre.replace(/ /g, "").normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
        }

        return this;

    });