import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes:Routes=[
  { path: '', component: ProductListComponent},
  { path: 'cart', component: CartComponent },
  {path:'details',component:ProductDetailsComponent},
  {path:'checkout',component:CheckoutComponent}
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
