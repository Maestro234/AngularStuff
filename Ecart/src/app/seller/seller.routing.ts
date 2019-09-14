import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { EKartRoutingGuard } from '../app.routing-guard';
import { SellerProfileComponent } from './seller-view-profile/seller-profile.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { SellerViewOrderComponent } from './seller-view-order/seller-view-order.component';
import { SellerAddProductsComponent } from './seller-add-products/seller-add-products.component';
import { SellerChangePasswordComponent } from './seller-change-password/change-password.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { SellerWishlistedProductsComponent } from './seller-wishlisted-products/seller-wishlisted-products.component';

const routes: Routes = [


  {
    path: 'sellerHome', component: SellerHomeComponent,canActivate:[EKartRoutingGuard], children: [
      { path: 'profile', component: SellerProfileComponent },
      { path: 'viewProducts', component: SellerProductsComponent },
      { path: 'viewOrders', component: SellerViewOrderComponent },
      { path: 'addProduct', component: SellerAddProductsComponent },
      {path: "changePassword",component:SellerChangePasswordComponent},
      {path: "sellerWishlist", component:SellerWishlistedProductsComponent}
    ]
  },
  {path:'sellerRegistration',component:SellerRegistrationComponent},
  { path: '', redirectTo: '/applicationHome', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }