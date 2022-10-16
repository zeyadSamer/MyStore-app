import { Injectable } from '@angular/core';
import Product from '../Models/Product'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:any[] =[];

  constructor() { }



  isProductExistInCart(product:Product){

    if(this.cartItems.length){
      
    for(let item of this.cartItems){
      if(item.id===product.id){

        item.quantity=product.quantity;
        return true;
      }
    }
  }
    return false;
  }

  addItem(product:Product){


    if(!this.isProductExistInCart(product)){

      this.cartItems.push(product);

    }

  }




  getItems(){

    return this.cartItems;
  }

  getTotalPrice(){

    let total=0;

    for(let item of this.cartItems){

      total+=item.quantity*item.price;






    }
    return total;
    



  }


  getCartSize(){

    let total=0;
    for(let item of this.cartItems){

      total+=item.quantity;


    }
    return total;

  
  }


  resetCart(){

    this.cartItems=[];




  }







 
  
}


