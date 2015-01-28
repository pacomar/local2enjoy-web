;(function () {
  'use strict';

  var app = angular.module('l2e-services', [])

    .service('APIService', ['$http', function($http) {
      return {
        getHomeData: function(callback) {
          //$http.post('/mercolive-backend/web/app_dev.php/api/poolred/getLast.json')
          $http.get('api/home_data.json')
            .success(callback)
            .error(function(data, status, headers, config){
              console.log('Error: ', status, data);
          });
        }
      };
  }]);

}());
