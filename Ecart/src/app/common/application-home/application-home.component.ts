import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../../shared/models/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginValidators } from '../../shared/validators/login.validator';
@Component({
    selector:'application-home',
    templateUrl:'./application-home.component.html',
    styleUrls:['./application-home.component.css']
})
export class ApplicationHomeComponent{
    activity:string="login";
    
    userActivity(option:string){
        this.activity=option;
    }
}