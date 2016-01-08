;(function () {
  'use strict'

  angular
    .module('petvet.factories')
    .factory('OwnerFactory',OwnerFactory);

  OwnerFactory.$inject = [];

  function OwnerFactory() {

    var owners = [{
      id:1,
      name:"User A"
    },
    {
      id:2,
      name:"User B"
    },
    {
      id:3,
      name:"User C"
    }];

    var ownerService = {
      getAll:getAll,
      get:get
    };

    return ownerService;

    function getAll() {
      return owners;
    };

    function get(id) {
      return owners[id-1];
    }
  };

})()
