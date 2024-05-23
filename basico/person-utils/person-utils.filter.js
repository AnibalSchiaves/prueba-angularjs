angular.module('personUtils')
    .filter('personid', function() {
        return function(nombre) {
            return nombre.replace(/ /g, "").normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
        }
    })
    .filter('personimg', function() {
        return function(nombre) {
            return "img/"+nombre.replace(/ /g, "").normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()+".jpeg";
        }
    });