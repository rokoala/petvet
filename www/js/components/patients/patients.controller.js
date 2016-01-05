;(function () {

  angular
    .module('petvet.controllers')
    .controller('PatientsController',PatientsController)

  PatientsController.$inject = ['PatientFactory'];

  function PatientsController(PatientFactory) {

    var self = this;

    self.patients = PatientFactory.getAll();
  };

})();
