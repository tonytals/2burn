import { Meteor } from 'meteor/meteor';
import { Products } from '../api/products';

Meteor.startup(() => {
  // code to run on server at startup
  //Quando o meteor é iniciado pela primeira vez ele cadastra produtos fantasmas para simulação
  if(Products.find().count() === 0){
    console.log('**** ATENÇÃO *****\nA collection "products" está vazia!');
  }
});
