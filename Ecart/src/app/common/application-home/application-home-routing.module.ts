import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationHomeComponent } from './application-home.component';
import { SellerLandingComponent } from '../../seller/seller-landing-page/seller-landing.component';



const routes: Routes = [
    
     
     { path: 'applicationHome', component: ApplicationHomeComponent},
     { path: 'seller', component: SellerLandingComponent},
     {path:'',redirectTo:'/applicationHome',pathMatch:'full'}
 
     
 ];
 
 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class ApplicationHomeRoutingModule { }