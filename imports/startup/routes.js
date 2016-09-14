import '../ui/partials/hero-unit.html';

export default angular.module('app.routes', []).config(($stateProvider, $locationProvider, $urlRouterProvider) => {


  $urlRouterProvider.otherwise('/'); //caso digite uma url inxistente redireciona para o HOME, /

  $locationProvider.html5Mode(true);

  //mapeamento de rotas do software
  //Cada nova rota deve iniciar com ".state(...)"
  $stateProvider
    .state('home', { //chamada no UI-SREF
      url: '/',
      templateUrl: 'imports/ui/partials/hero-unit.html' //arquivo a ser renderizado que representa a home
    })
    .state(
      'addProduct', {
        url: '/product/add',
        template: '<add-product></add-product>'
      }
    )
    .state(
      'viewCart', {
        url: '/cart',
        template: '<div class="ui container"><ngcart-cart></ngcart-cart></div>'
      }
    );

});
