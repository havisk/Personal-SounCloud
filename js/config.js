let config = function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'

    })

    .state('root.home', {
      url:'/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
      });


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;