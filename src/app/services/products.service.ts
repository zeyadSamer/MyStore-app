import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import {Observable} from 'rxjs';
import Product from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 

  constructor(private http:HttpClient) { }



private selectedProduct={
  id:0,
  title:'',
  description:'',
  price:0,
  image:'',
  category:''
};



getProducts():Observable<[]>{


  return this.http.get<[]>('https://fakestoreapi.com/products');

}


selectProduct(product:Product){


 this.selectedProduct=product;


}

getSelectedProduct(){
  return this.selectedProduct;

}


















}
