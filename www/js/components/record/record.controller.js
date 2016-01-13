;
(function() {
  'use strict';

  angular
    .module('petvet.controllers')
    .controller('RecordListController', RecordListController)
    .controller('RecordAddController', RecordAddController)


  RecordListController.$inject = ['RecordFactory'];

  function RecordListController(RecordFactory) {
    var self = this;

    self.records = RecordFactory.getAll();
  };

  RecordAddController.$inject = ['$state'];

  function RecordAddController($state) {
    this.patiendId = $state.params.patientId;
  };

})();
