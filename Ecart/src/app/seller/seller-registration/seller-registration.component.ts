import { Component, OnInit } from "@angular/core";
import { Seller } from "../../shared/models/seller";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginValidators } from "../../shared/validators/login.validator";
import { SellerRegistrationService } from "./seller-register.service";

@Component(
    {
        selector: "seller-registration",
        templateUrl: "./seller-registration.component.html"
    }
)
export class SellerRegistrationComponent implements OnInit {

    seller: Seller;
    registerUserForm: FormGroup;
    errorMessage: string;
    successMessage: string;
    constructor(private fb: FormBuilder, private registerService: SellerRegistrationService) {

    }

    ngOnInit() {
        this.seller = new Seller();
        this.createForm();

    }
    createForm() {

        this.registerUserForm = this.fb.group({
            emailId: [this.seller.emailId, [Validators.required, LoginValidators.validateEmailId], null],
            name: [this.seller.name, [Validators.required, LoginValidators.validateName], null],
            phoneNumber: [this.seller.phoneNumber, [Validators.required, LoginValidators.validatePhoneNumber], null],
            password: [this.seller.password, [Validators.required, LoginValidators.validatePassword], null],
            confirmPassword: ["", [Validators.required], null],
            address: [this.seller.address, [Validators.required], null]
        });
    }

    registerUser() {
        this.errorMessage = null;
        this.successMessage = null;
        this.seller = this.registerUserForm.value as Seller;

        this.registerService.registerSeller(this.seller).subscribe(
            (response) => this.successMessage = response
            , error => this.errorMessage = <any>error

        )
    }

}