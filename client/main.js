import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import '../imports/ui/partials/navbar.html';

import './main.html';

import appRoutes from '../imports/startup/routes';
import '../imports/startup/ngCart';
import '../imports/startup/accounts';
import addProduct from '../imports/directives/product/add';

angular.module('2b', [
  angularMeteor,
  uiRouter,
  appRoutes.name,
  addProduct.name,
  'ngCart',
  'accounts.ui'
]).controller('toBurnController', ['$scope', '$reactive', function ($scope, ngCart, $reactive) {

  $scope.animateCart = function(){
    $('.summaryCart')
      .transition('fade up')
      .transition('fade up')
      .transition('pulse');
  },
  $scope.isLoggedIn = function(){
    return !!Meteor.userId();
  },
  $scope.rMC = function(){
    console.log('rMC' + 'sidsid');
  }
  //,ngCart.setCartOwner(Meteor.userId());
}]);
