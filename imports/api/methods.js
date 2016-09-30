import { Products } from './products';
import { Cart } from './cart';

Meteor.methods({

  'products.addProduct' (newProduct) {
    Products.insert(newProduct);
  },

  'cart.registerMyCart' (myCart){
    Cart.update({ _id : myCart.cartOwner } ,
        myCart,
        { 'upsert' : true }
    );    
    return true;
    /*** LINHA PARA CRUZAMENTO DE DADOS "carrinho" x "dono do carrinho"
       db.cart.aggregate([
       {
        $lookup:
          { from : "users",
            localField : "cartOwner",
            foreignField : "_id",
            as: "de_quem_eh_o_carrinho"
          }
        }]);
    */
  }

});
