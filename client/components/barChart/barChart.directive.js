'use strict';
const angular = require('angular');

export default angular.module('idhAngularApp.barChart', [])
  .directive('barChart', function(d3Service, $window) {
    return {
      // template: require('./barChart.html'),
      restrict: 'EA',
      scope: {
        data: '@',
        selectedState: '@',
        sortBy: '@',
        year: '='
      },

      link: function(scope, element, attrs) {
        d3Service.d3()
        .then(function(d3) {
          var svg = d3.select(element[0])
            .append('svg')
            .style('width', '100%');

          // Browser onresize event
          window.onresize = function() {
            scope.$apply();
          };

          // hard-code data
          scope.data = [
            {name: "Greg", score: 98},
            {name: "Ari", score: 96},
            {name: 'Q', score: 75},
            {name: "Loser", score: 48}
          ];

          // Watch for resize event
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });

          scope.render = function(data) {
            // our custom d3 code
            console.log('dr',data);
          }
        });
      }
    };
  })
  .name;
