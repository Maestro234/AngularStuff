import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationHomeComponent } from './application-home.component';
import { ApplicationHomeRoutingModule } from './application-home-routing.module';
import { SellerModule } from '../../seller/seller.module';

import { CustomerModule } from '../../customer/customer.module';

import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';
import { RegistrationComponent } from '../registration/registration.component';
import { RegistrationService } from '../registration/registration.service';

@NgModule(
    {
        declarations: [
            ApplicationHomeComponent,
            LoginComponent,
            RegistrationComponent
        
        ],
        imports: [
            BrowserModule,
            ApplicationHomeRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            SellerModule,
            CustomerModule
        ],
        providers: [LoginService,RegistrationService],
        exports: []
    }
)
export class ApplicationHomeModule {

}