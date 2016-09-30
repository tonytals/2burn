import { Meteor } from 'meteor/meteor';
import { Products } from '../api/products';
import { Cart } from '../api/cart';

Meteor.startup(() => {
  // code to run on server at startup
  console.log("Users Count:.... " + Meteor.users.find().count());
  console.log("Product Count:.. " + Products.find().count());
  console.log("Cart Count...... " + Cart.find().count());
});

Meteor.publish('myCartQuery', function () {
  return Cart.find({});
});
