import { Products } from './products';

Meteor.methods({

  'products.addProduct' (newProduct) {
    Products.insert(newProduct);
  }

});
