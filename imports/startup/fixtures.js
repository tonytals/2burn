import { Meteor } from 'meteor/meteor';
import { Produtos } from '../api/products';

Meteor.startup(() => {
  // code to run on server at startup
  //Quando o meteor é iniciado pela primeira vez ele cadastra produtos fantasmas para simulação
  if(Produtos.find().count() === 0){
    console.log('**** ATENÇÃO *****\nA collection "products" está vazia!');
  }
});
