import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seller } from '../../shared/models/seller';
import { SellerChangePasswordService } from './seller-change-password-service';
import { LoginValidators } from '../../shared/validators/login.validator';
@Component({
    selector: 'seller-change-password',
    templateUrl: './change-password.component.html'
})
export class SellerChangePasswordComponent {

    seller: Seller;
    sellerToUpdate: Seller;
    sellerString: string;
    updateUserDetailsForm: FormGroup;
    errorMessage: string;
    successMessage: string;
    constructor(private fb: FormBuilder, private changePasswordService: SellerChangePasswordService) {

    }

    ngOnInit() {

        this.seller = JSON.parse(sessionStorage.getItem("seller"));
        this.createForm();

    }
    createForm() {
        let emailId = this.seller.emailId;
        let pswd=this.seller.password;
        this.updateUserDetailsForm = this.fb.group({
            password: [pswd, [Validators.required, LoginValidators.validatePassword]],
            newPassword: ["", [Validators.required]],
            emailId: [emailId, [Validators.required]]
        });
    }
    updateSellerPassword() {
        this.errorMessage = null;
        this.successMessage = null;
        this.sellerToUpdate = this.updateUserDetailsForm.value as Seller;

        this.changePasswordService.updatePassword(this.sellerToUpdate).subscribe(
            (response) => {
                this.successMessage = response;
            }, error => this.errorMessage = <any>error

        )
    }
}