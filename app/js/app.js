;(function(){
  'use strict';

  var app = angular.module('l2e-app', ['ui.bootstrap', 'l2e-directives', 'l2e-services']);

  app.controller('MainCtrl', ['APIService', function(APIService) {
    var main = this;

    main.templates = [
      {
        name: "main",
        url:'partials/main.html'
      }
    ];

    main.template = main.templates[0];

  }]);

  app.controller('HeroCtrl', ['APIService', function(APIService) {
    var hero = this;

    APIService.getHomeData(function(result) {
        console.log('API call Results: ', result);
        hero.title = result.data.title;
        hero.description = result.data.description;
        hero.cta = result.data.cta;
      });

  }]);

  app.controller('NavbarCtrl', [function(){
    var nav = this;
    nav.isCollapsed = true;
  }]);

  app.controller('UsersCtrl', ['$http', function($http){
    var users = this;

    users.traveller = [
      {
        id: '1',
        name: 'My Name',
        photo: 'http://placehold.it/36x36&text=T',
        city: 'My City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: '2',
        name: 'My Name',
        photo: 'http://placehold.it/36x36&text=T',
        city: 'My City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: '3',
        name: 'My Name',
        photo: 'http://placehold.it/36x36&text=T',
        city: 'My City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: '4',
        name: 'My Name',
        photo: 'http://placehold.it/36x36&text=T',
        city: 'My City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ];

    users.local = [
      {
        id: '5',
        name: 'My Name',
        photo: 'http://placehold.it/36x36&text=L',
        city: 'My City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: '6',
        name: 'My Name',
        photo: 'http://placehold.it/36x36&text=L',
        city: 'My City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: '7',
        name: 'My Name',
        photo: 'http://placehold.it/36x36&text=L',
        city: 'My City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: '8',
        name: 'My Name',
        photo: 'http://placehold.it/36x36&text=T',
        city: 'My City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ];

  }])

}());
