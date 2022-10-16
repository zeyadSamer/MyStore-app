import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService:CartService) { }

  public cartItemsCount=0;

  ngOnInit(): void {
    
  }



  getCartSize(){
    return this.cartItemsCount=this.cartService.getCartSize();

  }

}
