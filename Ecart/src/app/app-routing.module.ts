import {NgModule} from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { AuthorisationErrorComponent } from './errors/authorisation-error.component';

const routes:Routes=[
    {path:'error',component:AuthorisationErrorComponent},
    {path:'',redirectTo:'/applicationHome',pathMatch:'full'}
]

@NgModule(
    {
        declarations:[],
        imports:[
            RouterModule.forRoot(routes)
        ],
        exports:[RouterModule]
    }
)
export class AppRoutingModule{

}