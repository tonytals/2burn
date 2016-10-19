import { Products } from './products';
import { Cart } from './cart';

Meteor.methods({

  'products.addProduct' (newProduct) {
    Products.insert(newProduct);
  },

  'cart.registerMyCart' (myCart){
    console.log(myCart);
    if(myCart.cartOwner != null){
      Cart.update({ _id : myCart.cartOwner } ,
        myCart,
        { 'upsert' : true }
      );
    } else {
      console.log("Carrinho não salvo por falta do campo 'myCart.cartOwner'");
    }
    //return true;
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
