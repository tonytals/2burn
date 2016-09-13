import '../../ui/product/add.html';

export default angular.module('app.addProduct', []).directive('addProduct', function (){

  return {
    retrict: 'E',
    templateUrl: 'imports/ui/product/add.html',
    controllerAs: 'aPC', //Adicionar Produto Controller (add Product Controller)
    controller: function (){

      this.newProduct = {};

      this.saveProduct = () => {
        Meteor.call('products.addProduct', this.newProduct);
        //console.log(this.newProduct);
      }
    }
  }

});
