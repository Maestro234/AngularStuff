import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../shared/models/customer';
import { CustomerChangePasswordService } from './customer-change-password-service';
import { LoginValidators } from '../../shared/validators/login.validator';
@Component({
    selector: 'customer-change-password',
    templateUrl: './change-password.component.html'
})
export class CustomerChangePasswordComponent {

    customer: Customer;
    customerToUpdate: Customer;
    customerString: string;
    pass:any;
    updateUserDetailsForm: FormGroup;
    errorMessage: string;
    successMessage: string;
    constructor(private fb: FormBuilder, private changePasswordService: CustomerChangePasswordService) {

    }

    ngOnInit() {

        this.customer = JSON.parse(sessionStorage.getItem("customer"));
        this.createForm();
        //this.pass=this.customer.password;

    }
    createForm() {
        let emailId = this.customer.emailId;
        let password=this.customer.password;
        this.updateUserDetailsForm = this.fb.group({
           password:[password, [Validators.required]],
            newPassword: ["", [Validators.required, LoginValidators.validatePassword]],
            //confirmPassword: ["", [Validators.required]],
            emailId: [emailId, [Validators.required]]
        });
    }
    updateCustomerPassword() {
        this.errorMessage = null;
        this.successMessage = null;
        this.customerToUpdate = this.updateUserDetailsForm.value as Customer;

        this.changePasswordService.updatePassword(this.customerToUpdate).subscribe(
            (response) => {
                this.successMessage = response;
                // sessionStorage.setItem("customer", JSON.stringify(this.customer));
            }, error => this.errorMessage = <any>error
        )
    }
}