;
(function() {

  'use strict';

  angular
    .module('petvet.controllers')
    .controller('OwnerListController', OwnerListController)
    .controller('OwnerAddController', OwnerAddController)
    .controller('OwnerEditController', OwnerEditController)

  OwnerListController.$inject = ['$state', 'OwnerFactory'];

  function OwnerListController($state, OwnerFactory) {

    this.owners = OwnerFactory.getAll();
    this.state = $state;
  };

  OwnerAddController.$inject = ['$state', '$ionicHistory'];

  function OwnerAddController($state, $ionicHistory) {
    var self = this;

    this.user = {};

    this.add = function(user) {
      if (self.form.$valid) {
        user.id = 1;

        $ionicHistory.nextViewOptions({
          historyRoot: true,
          disableAnimate: true,
          expire: 300
        });

        $state.go('app.editOwner', {
          id: user.id
        });
      }
    };
  };

  OwnerEditController.$inject = ['owner'];

  function OwnerEditController(owner) {
    var self = this;
    
    this.user = owner;
  };

})();
