;
(function() {

  angular
    .module('petvet.controllers')
    .controller('PatientController', PatientController)
    .controller('PatientDetailController', PatientDetailController)
    .controller('PatientListController', PatientListController)

  PatientController.$inject = ['patient', '$state'];

  function PatientController(patient, $state) {
    var self = this;

    this.data = patient;

    this.state = $state;
  };

  PatientDetailController.$inject = [];

  function PatientDetailController() {
    var self = this;
  };

  PatientListController.$inject = ['PatientFactory'];

  function PatientListController(PatientFactory) {
    var self = this;

    self.patients = PatientFactory.getAll();
  }

})();
