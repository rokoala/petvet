;(function () {

  angular
    .module('petvet.controllers')
    .controller('PatientsController',PatientsController)

  PatientsController.$inject = [];

  function PatientsController() {

    var self = this;

    self.patients = [{
      name:"User A",
      pet:{
        name:"Mimi",
        type:"cat"
      }
    },
    {
      name:"User B",
      pet:{
        name:"Thor",
        type:"dog"
      }
    },
    {
      name:"User C",
      pet:{
        name:"Jake the dog",
        type:"dog"
      }
    }]

  };

})();
