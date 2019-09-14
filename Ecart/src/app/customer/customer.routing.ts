import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { EKartRoutingGuard } from '../app.routing-guard';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { CustomerWishlistComponent } from './customer-wishlist/customer-wishlist.component';


const routes: Routes = [


  {
    path: 'home', component: CustomerHomeComponent, canActivate: [EKartRoutingGuard], children: [

      { path: 'details', component: CustomerDetailsComponent },
      { path: 'products', component: ViewAllProductsComponent },
      { path: 'cart', component: CustomerCartComponent },
      { path: 'wishlist', component: CustomerWishlistComponent }
    ]
  },
  { path: '', redirectTo: '/applicationHome', pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }