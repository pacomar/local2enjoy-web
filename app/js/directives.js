;(function () {
  'use strict';

  var app = angular.module('l2e-directives', [])
    .directive('l2eHero', [function(){
      // Runs during compile
      return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        restrict: 'E',
        // template: '',
        controller: 'HeroCtrl as hero',
        templateUrl: 'partials/hero.html'
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        // link: function($scope, iElm, iAttrs, controller) { }
      };
    }])

    .directive('l2eNavbar', [function(){
      return {
        restrict: 'E',
        controller: 'NavbarCtrl as nav',
        templateUrl: 'partials/navbar.html'
      }
    }])

    .directive('l2eFooter', [function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/footer.html'
      }
    }])
}());
