;(function () {

  'use strict';

  angular
    .module('petvet.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location'];

  function LoginController($location) {
    var self=this

    self.login = function () {
      $location.path('/app');
    };
  };

})();
