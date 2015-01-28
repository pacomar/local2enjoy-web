(function () {
	'use strict';
	angular.module('web', ['ngRoute', 'web.controllers']);
	function config ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		$routeProvider
			.when('/', {
				templateUrl: 'views/index.tpl.html',
				controller: 'IndexCtrl',
				controllerAs: 'index'
			})
			.when('/page2', {
				templateUrl: 'views/page2.tpl.html',
				controller: 'ContactoCtrl',
				controllerAs: 'contact'
			})
			.when('/login', {
				templateUrl: 'views/login.tpl.html',
				controller: 'LoginCtrl',
				controllerAs: 'login'
			})
			.when('/signup', {
				templateUrl: 'views/signup.tpl.html',
				controller: 'SignupCtrl',
				controllerAs: 'signup'
			});
	}
	angular
		.module('web')
		.config(config);
})();
