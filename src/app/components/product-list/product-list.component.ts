import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {



  products =[];
  isDataReceived:boolean=false;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {


    this.productsService.getProducts().subscribe(res=>{
      

      this.products=res;
      this.isDataReceived=true;
    
    });


  
  }





}
