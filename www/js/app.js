// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'petvet' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'petvet.controllers' is found in controllers.js
angular.module('petvet', ['ionic', 'petvet.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'js/components/menu/menu.template.html',
    controller: 'MenuController'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'js/components/login/login.template.html',
    controller: 'LoginController',
    controllerAs: 'vm'
  })


  .state('app.home', {
    url:'/home',
    views:{
      'menuContent':{
        templateUrl:'js/components/home/home.template.html',
        controller:'HomeController',
        controllerAs:'vm'
      }
    }
  })

  .state('app.patients', {
    url: '/patients',
    views: {
      'menuContent': {
        templateUrl:'js/components/patients/patients.template.html',
        controller:'PatientsController',
        controllerAs:'vm'
      }
    }
  })


  .state('app.patient', {
    url: '/patient/:patientId',
    views: {
      'menuContent': {
        templateUrl:'js/components/patient/patient.template.html',
        controller:'PatientController',
        controllerAs:'vm'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
