import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Product from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {



  products =[];
  isDataReceived:boolean=false;

  constructor(private productsService:ProductsService,private cartService:CartService) { }

  ngOnInit(): void {


    this.productsService.getProducts().subscribe(res=>{
      

      this.products=res;
      this.isDataReceived=true;
    
    });



  
  }


  addToCart(product:any){
   
    this.cartService.addItem(product);
  }


  removeFromCart(id:any){
    this.cartService.remove(id);

  }





}
