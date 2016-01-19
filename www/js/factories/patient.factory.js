;
(function() {
  'use strict'

  angular
    .module('petvet.factories')
    .factory('PatientFactory', PatientFactory);

  PatientFactory.$inject = [];

  function PatientFactory() {

    var patients = [{
      id: 1,
      name: "João da silva",
      pet: {
        id:1,
        name: "Mimi",
        type: "cat",
        breed: "Scottish Fold",
        age: '5',
        weight: '3000',
        img:'img/scottish-fold.jpg',
        lastAppointment: new Date(),
        records: {}
      }
    }, {
      id: 2,
      name: "Maria das Graças",
      pet: {
        id:2,
        name: "Thor",
        type: "dog",
        breed: "Rottweiler",
        age: '2',
        weight: '2000',
        img:'img/rottweiler.png',
        lastAppointment: new Date(),
        records: {}
      }
    }, {
      id: 3,
      name: "Rodrigo Koga",
      pet: {
        id:3,
        name: "Jake the dog",
        type: "dog",
        breed: "Buldogue",
        age: '6',
        weight: '4500',
        img:'img/jake.png',
        lastAppointment: new Date(),
        records: {}
      }
    }];

    var patientService = {
      getAll: getAll,
      get: get
    };

    return patientService;

    function getAll() {
      return patients;
    };

    function get(id) {
      return patients[id - 1];
    }
  };

})()
