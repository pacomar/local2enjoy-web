(function () {
    'use strict';
    angular.module('web.controllers', ['web.services'])
    .controller('IndexCtrl', IndexCtrl)
    .controller('ContactoCtrl', ContactoCtrl)
    .controller('FinanciacionCtrl', FinanciacionCtrl)
    .controller('HistoriaCtrl', HistoriaCtrl)
    .controller('NosostrosCtrl', NosostrosCtrl)
    .controller('NoticiasCtrl', NoticiasCtrl)
    .controller('HeaderController', HeaderController);

    function IndexCtrl (Post) {
        this.posts = Post.query();
    }
    function ContactoCtrl (Post) {
        this.posts = Post.query();
    }
    function FinanciacionCtrl (Post) {
        this.posts = Post.query();
    }
    function HistoriaCtrl (Post) {
        this.posts = Post.query();
    }
    function NosostrosCtrl (Post) {
        this.posts = Post.query();
    }
    function NoticiasCtrl (Post) {
        this.posts = Post.query();
    }

    function HeaderController($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }
})();
