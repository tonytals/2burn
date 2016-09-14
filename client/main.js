import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import '../imports/ui/partials/navbar.html';

import './main.html';

import appRoutes from '../imports/startup/routes';
import '../imports/startup/accounts';
import addProduct from '../imports/directives/product/add';

angular.module('2b', [
  angularMeteor,
  uiRouter,
  'accounts.ui',
  appRoutes.name,
  addProduct.name,
  'ngCart'
]).controller('toBurnController', function ($scope) {
  $scope.animateCart = function(){
    $('.summaryCart')
      .transition('fade up')
      .transition('fade up')
      .transition('pulse');
  }
});
