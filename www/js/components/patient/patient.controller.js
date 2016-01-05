;(function () {

  angular
    .module('petvet.controllers')
    .controller('PatientController',PatientController)

  PatientController.$inject = [];

  function PatientController() {
    this.user = {
      name:"teste"
    };
  };

})();
