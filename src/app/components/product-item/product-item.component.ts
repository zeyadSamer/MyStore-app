import { Component, OnInit,Input } from '@angular/core';
import Product from '../../Models/Product';

import { Router } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {



@Input() product:Product={
  id:0,
  title:'',
  description:'',
  price:0,
  image:'',
  category:'',
  quantity:0
};

public productQuantity:number=1;

  
  constructor(private router:Router,private cartService:CartService,private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  gotoItemDetails(){


    this.productsService.selectProduct(this.product);

    this.router.navigate(['/details']);

  }



  addProductToCart(){


    //product quantity is assigned to string from the ng model
    this.product.quantity=parseInt(this.productQuantity as unknown as string) ;

    
    this.cartService.addItem(this.product);
    alert(`${this.product.title} is added to cart`)



  }


  

}