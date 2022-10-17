import { Component, OnInit } from '@angular/core';
import Product from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
import User from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public cartItems: Array<Product | null> =[];

  public totalPrice:number=0;
  public user:User={

    name:'',
    address:'',
    creditCardNumber:''
  };



 
   

  
  constructor(private router:Router,private cartService:CartService,private userService:UserService) { }

  ngOnInit(): void {


    this.getCartItems();
    this.getTotalPrice();
  }

  getCartItems(){

    this.cartItems=this.cartService.getItems();
    
  }


  getTotalPrice(){
    this.totalPrice=parseFloat(this.cartService.getTotalPrice().toFixed(2));
   
  }



  submitOrder(){

    this.userService.submitUserDetails(this.user);
    this.router.navigate(['/checkout']);
  
  
  
  }


  removeProductFromCart(id:any){
    this.cartService.remove(id);

    //to get again the cart items after removal of an item
    this.getCartItems();
    this.getTotalPrice();


  }
  




}
