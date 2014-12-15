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
			});
	}
	angular
		.module('web')
		.config(config);
})();
