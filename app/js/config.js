let config = function ($stateProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: './templates/layout.tpl.html'
    })
    .state('root.home', {
      controller: 'HomeController',
      url: '/',
      templateUrl: './templates/home.tpl.html'
    })


};

config.$inject = ['$stateProvider'];

export default config;