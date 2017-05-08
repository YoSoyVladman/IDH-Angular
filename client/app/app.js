'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

//Services
import idhService from '../services/idhService/idhService.service';
import d3Service from '../services/d3Service/d3Service.service';
//Directives
import barChart from '../components/barChart/barChart.directive';

import './app.scss';

angular.module('idhAngularApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, navbar,
  footer, main, constants, util,
  idhService,
  d3Service,
  barChart
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['idhAngularApp'], {
      strictDi: true
    });
  });
