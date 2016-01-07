;(function () {

  angular
    .module('petvet.controllers')
    .controller('PatientController', PatientController)
    .controller('PatientDetailController', PatientDetailController)
    .controller('PatientAddController', PatientAddController)

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

  PatientAddController.$inject = [];

  function PatientAddController() {
    var self = this;
    this.hello = "olar"
  };


})();
