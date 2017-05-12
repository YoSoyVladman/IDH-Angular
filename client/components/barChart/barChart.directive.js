'use strict';
const angular = require('angular');

export default angular.module('idhAngularApp.barChart', [])
  .directive('barChart', function(d3Service, $window) {
    return {
      // template: require('./barChart.html'),
      restrict: 'EA',
      scope: {
        data: '=',
        selectedState: '=',
        sortBy: '=',
        year: '='
      },

      link: function(scope, element, attrs) {
        d3Service.d3()
          .then(function(d3) {
            var margin = parseInt(attrs.margin, 10) || 250;
            var barHeight = parseInt(attrs.barHeight, 10) || 20;
            var barPadding = parseInt(attrs.barPadding, 10) || 5;

            var selectYear = dataByYear(scope.data, scope.year);
            var orderBy = orderData(selectYear, scope.sortBy);

            var svg = d3.select(element[0])
              .append('svg')
              .style('width', '100%');

            // Browser onresize event
            window.onresize = function() {
              scope.$apply();
            };

            scope.$watch(function(){
                return angular.element(window)[0].innerWidth;
              }, function(){
                selectYear = dataByYear(scope.data, scope.year);
                orderBy = orderData(selectYear, scope.sortBy);
                return scope.render(orderBy);
              }
            );

            // watch for year changes and re-render
            scope.$watch('year', function(newVal) {
              selectYear = dataByYear(scope.data, newVal);
              orderBy = orderData(selectYear, scope.sortBy);
              return scope.render(orderBy);
            }, true);

            // watch for sortBy changes and re-render
            scope.$watch('sortBy', function(newVal) {
              selectYear = dataByYear(scope.data, scope.year);
              orderBy = orderData(selectYear, newVal);
              return scope.render(orderBy);
            }, true);

            // watch for selectedState changes and re-render
            scope.$watch('selectedState', function(newVal) {
              selectYear = dataByYear(scope.data, scope.year);
              orderBy = orderData(selectYear, scope.sortBy);
              return scope.render(orderBy);
            }, true);

            // define render function
            scope.render = function(data) {

              var windowWidth = angular.element(window)[0].innerWidth;
              console.log(windowWidth);
              // remove all previous items before render
              svg.selectAll('*').remove();

              // If we don't pass any data, return out of the element
              if(!data) return;

              // setup variables
              var width = d3.select(element[0]).node().offsetWidth - margin;
                // calculate the height
              var height = scope.data.length * (barHeight + barPadding);
                // our xScale
              var xScale = d3.scale.linear()
                .domain([0, d3.max(data, function(d) {
                  return d.idh;
                })])
                .range([0, width]);

              // set the height based on the calculations above
              svg.attr('height', height);

              //create the rectangles for the bar chart
              svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('height', barHeight)
                .attr('width', 140)
                .attr('x', Math.round(margin / 2))
                .attr('y', function(d, i) {
                  return i * (barHeight + barPadding);
                })
                .attr('fill', function(d,i){
                  if (d.name == scope.selectedState) {
                    return d3.rgb(240,96,24)
                  }
                  else {
                    return d3.rgb(48, 144, 168)
                  }
                })
                .transition()
                .duration(500)
                .attr('width', function(d) {
                  return xScale(d.idh);
                });

              // add Name to each Bar
              svg.selectAll('text')
                .data(data)
                .enter()
                .append('text')
                .attr('fill', d3.rgb(0, 0, 0))
                .attr('y', function(d, i) {
                  return i * (barHeight + barPadding) + 15;
                })
                .attr('x', 0)
                .text(function(d) {
                  return d.name;
                });
            };
          });

        function dataByYear(data, year) {
          var dataYear = [];
          data.forEach(state => {
            state.years.forEach(ele => {
              if(ele.year == year) {
                var obj = {
                  name: state.name,
                  abbreviation: state.abbreviation,
                  idh: ele.idh
                };
                dataYear.push(obj);
                return;
              }
            });
          });
          return dataYear;
        }

        function orderData(data, order) {
          if(order == 1) {
            var ascending = data.sort((a, b) => Number(a.idh) - Number(b.idh));
            return ascending;
          }
          else if(order == 2) {
            var descending = data.sort((a, b) => Number(b.idh) - Number(a.idh));
            return descending;
          }
          else {
            return data;
          }
        }
      }
    };
  })
  .name;
