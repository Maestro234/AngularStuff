import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerLoginComponent } from './login/seller-login.component';
import { SellerLoginService } from './login/seller-login.service';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerRoutingModule } from './seller.routing';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { SellerViewOrderComponent } from './seller-view-order/seller-view-order.component';
import { SellerProfileComponent } from './seller-view-profile/seller-profile.component';
import { SellerAddProductsComponent } from './seller-add-products/seller-add-products.component';
import { SellerProfileUpdateService } from './seller-view-profile/seller-profile-update-service';
import { SellerAddProductService } from './seller-add-products/seller-add-product.service';
import { SellerSharedService } from './seller-shared.service';
import { SellerChangePasswordService } from './seller-change-password/seller-change-password-service';
import { SellerChangePasswordComponent } from './seller-change-password/change-password.component';
import { SellerViewOrderService } from './seller-view-order/seller-view-order.service';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { SellerRegistrationService } from './seller-registration/seller-register.service';

import { SellerProductsModifyService } from './seller-products/seller-products-modify.service';
import { SellerLandingComponent } from './seller-landing-page/seller-landing.component';
import { DatePipe } from '../shared/pipes/date-converter.pipe';
import { SellerWishlistedProductsComponent } from './seller-wishlisted-products/seller-wishlisted-products.component';



@NgModule({
    declarations: [
        SellerLandingComponent,
        SellerHomeComponent,
        SellerLoginComponent,
        SellerProductsComponent,
        SellerViewOrderComponent,
        SellerProfileComponent,
        SellerAddProductsComponent,
        SellerChangePasswordComponent,
        SellerRegistrationComponent,
        DatePipe,
        SellerWishlistedProductsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SellerRoutingModule
    ],
    providers: [
        SellerLoginService,
        SellerProfileUpdateService,
        SellerAddProductService,
        SellerSharedService,
        SellerProfileUpdateService,
        SellerChangePasswordService,
        SellerViewOrderService,
        SellerRegistrationService,

        SellerRegistrationService,
        SellerProductsModifyService
    ],
    exports: []

})
export class SellerModule {

}