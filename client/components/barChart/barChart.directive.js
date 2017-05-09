'use strict';
const angular = require('angular');

export default angular.module('idhAngularApp.barChart', [])
  .directive('barChart', function(d3Service, $window) {
    return {
      // template: require('./barChart.html'),
      restrict: 'EA',
      scope: {
        data: '=',
        selectedState: '@',
        sortBy: '@',
        year: '='
      },

      link: function(scope, element, attrs) {
        d3Service.d3()
        .then(function(d3) {

          var margin = parseInt(attrs.margin) || 20,
          barHeight = parseInt(attrs.barHeight) || 20,
          barPadding = parseInt(attrs.barPadding) || 5;

          var year = '1990'
          var selectYear = dataByYear(scope.data, year);

          var svg = d3.select(element[0])
            .append('svg')
            .style('width', '100%');

          // Browser onresize event
          window.onresize = function() {
            scope.$apply();
          };


          // Watch for resize event
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(selectYear);
          });

          scope.render = function(data) {
            // remove all previous items before render
            svg.selectAll('*').remove();

            // If we don't pass any data, return out of the element
            if (!data) return;

            // setup variables
            var width = d3.select(element[0]).node().offsetWidth - margin,
                // calculate the height
                height = scope.data.length * (barHeight + barPadding),
                // Use the category20() scale function for multicolor support
                color = d3.scale.category20(),
                // our xScale
                xScale = d3.scale.linear()
                  .domain([0, d3.max(data, function(d) {
                    return d.idh;
                  })])
                  .range([0, width]);

            // set the height based on the calculations above
            svg.attr('height', height);

            //create the rectangles for the bar chart
            svg.selectAll('rect')
              .data(data).enter()
                .append('rect')
                .attr('height', barHeight)
                .attr('width', 140)
                .attr('x', Math.round(margin/2))
                .attr('y', function(d,i) {
                  return i * (barHeight + barPadding);
                })
                .attr('fill', function(d) { return color(d.idh); })
                .transition()
                  .duration(1000)
                  .attr('width', function(d) {
                    return xScale(d.idh);
                  });
            svg.selectAll('text')
                  .data(data)
                  .enter()
                    .append('text')
                    .attr('fill', '#fff')
                    .attr('y', function(d,i) {
                      return i * (barHeight + barPadding) + 15;
                    })
                    .attr('x', 15)
                    .text(function(d) {
                      return d.name;
                    });
           }

        });

        function dataByYear(data,year){
          var dataYear = [];
          console.log(data);
          console.log(year);
          data.forEach(state => {
            console.log(state);
            state.years.forEach(element =>{
              if (element.year == year) {
                console.log(element.year);
                var obj = {name: state.name, idh: element.idh};
                dataYear.push(obj);
                return
              }
            });
          });
          return dataYear;
        }

      }
    };
  })
  .name;
