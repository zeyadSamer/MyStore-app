import { Component, OnInit } from '@angular/core';
import Product from 'src/app/Models/Product';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  public showedProduct:Product= {
      id:0,
      title:'',
      description:'',
      price:0,
      image:'',
      category:''
    };
  ;

  
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.getSelectedProduct();
    
  }




  getSelectedProduct(){


    this.showedProduct=this.productsService.getSelectedProduct();


  }
  










}
