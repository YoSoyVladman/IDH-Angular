import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor(idhService) {
    this.idhService = idhService;
    this.year = '1990';
  }

  $onInit() {
    this.states = this.idhService.getStates();
  }
}

export default angular.module('idhAngularApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'mainCtrl'
  })
  .name;
