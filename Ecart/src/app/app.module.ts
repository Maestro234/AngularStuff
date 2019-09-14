import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ApplicationHomeModule} from'./common/application-home/application-home.module';
import { EKartRoutingGuard } from './app.routing-guard';
import { AuthorisationErrorComponent } from './errors/authorisation-error.component';
import { SellerModule } from './seller/seller.module';
import { CustomerModule } from './customer/customer.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthorisationErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ApplicationHomeModule,
    SellerModule,
    CustomerModule
  ],
  providers: [EKartRoutingGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
