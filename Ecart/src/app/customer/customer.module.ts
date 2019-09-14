import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRoutingModule } from './customer.routing';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewAllProductsService } from './view-all-products/view-all-products.service';

import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerChangePasswordService } from './customer-change-password/customer-change-password-service';
import { CustomerChangePasswordComponent } from './customer-change-password/change-password.component';
import { CustomerProfileComponent } from './customer-profile-details/customer-profile.component';
import { CustomerProfileService } from './customer-profile-details/customer-profile-service';
import { CustomerAddressComponent } from './customer-address/customer-address.component';

import { AddressPipe } from '../shared/pipes/address-pipe';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerProductDetails } from './customer-product-details/customer-product-details.component';
import { CustomerSharedService } from './customer-common-service';
import { ProductDescriptionPipe } from '../shared/pipes/product-description.pipe';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { CustomerHomeService } from './customer-home/customer-home.service';
import { ViewCartProductDetail } from './customer-cart/view-cart-product/view-cart-product-detail.component';
import { CustomerCartService } from './customer-cart/customer-cart.service';
import { AddToCart } from './customer-cart/add-to-cart/add-to-cart.component';
import { CustomerWishlistComponent } from './customer-wishlist/customer-wishlist.component';
import { DateformatPipe } from '../shared/pipes/dateformat.pipe';


//import { CustomerWishlistComponent } from './customer-wishlist/customer-wishlist/customer-wishlist.component';


@NgModule({
    declarations: [
        CustomerHomeComponent,
        CustomerDetailsComponent,
        ViewAllProductsComponent,
        CustomerChangePasswordComponent,
        CustomerProfileComponent,
        CustomerAddressComponent,
        AddressPipe,
        ProductDescriptionPipe,
        CustomerProductDetails,
        CustomerCartComponent,
        ViewCartProductDetail,
        AddToCart,
        CustomerWishlistComponent,
        DateformatPipe
        

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CustomerRoutingModule
    ],
    providers: [
        ViewAllProductsService,
        CustomerChangePasswordService,
        CustomerProfileService,
        CustomerSharedService,
        CustomerHomeService,
        CustomerCartService
    ],
    exports: []

})
export class CustomerModule {

}