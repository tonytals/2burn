import '../../ui/product/add.html';

export default angular.module('app.addProduct', []).directive('addProduct', function (){

  return {
    retrict: 'E',
    templateUrl: 'imports/ui/product/add.html',
    controller: 'aPC', //Adicionar Produto Controller (add Product Controller)
    controllerAs: function (){

    }
  }

});
