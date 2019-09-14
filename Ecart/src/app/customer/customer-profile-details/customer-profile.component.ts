import { Component, Output, EventEmitter } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Customer } from "../../shared/models/customer";
import { CustomerProfileService } from "./customer-profile-service";
import { Router, ActivatedRoute } from "@angular/router";






@Component(
    {
        selector: 'customer-profile',
        templateUrl: './customer-profile.component.html'
    }
)
export class CustomerProfileComponent implements OnInit {
    customer: Customer;
    updating: string = null;
    sellerToUpdate: Customer;
    customerToUpdate:Customer
    errorMessage: string = "";
    successMessage: string = "";

    constructor(private sellerProfileUpdateService: CustomerProfileService,
        private router: Router,
        private route: ActivatedRoute
    ) {


    }
    ngOnInit() {
        this.customer = JSON.parse(sessionStorage.getItem("customer"));
        this.sellerToUpdate = this.customer;


    }

    linkClick(value) {
        this.updating = value;
        this.errorMessage = "";
        this.successMessage = "";
    }

    updateDetail(action: string) {
        this.errorMessage = null;
        this.successMessage = null;
        if (action == "update") {
            this.sellerProfileUpdateService.updateCustomerDetails(this.sellerToUpdate).subscribe(
                (response) => {
                    this.successMessage = response;
                    this.customer = this.sellerToUpdate;
                    sessionStorage.setItem("customer", JSON.stringify(this.sellerToUpdate));
                    this.updating = "";
                    this.router.navigate(["home/details"]);
                }, error => this.errorMessage = <any>error

            )
        } else {
            this.updating = "";
        }
    }


}