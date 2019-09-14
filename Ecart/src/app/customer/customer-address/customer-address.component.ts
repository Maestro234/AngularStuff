import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Customer } from "../../shared/models/customer";
import { Address } from "../../shared/models/address";
//Test


@Component({
    selector: "customer-address",
    templateUrl: "./customer-address.component.html",
    styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {

    loggedInCustomer: Customer;
    addresses: Address[];

    ngOnInit() {
        this.loggedInCustomer = JSON.parse(sessionStorage.getItem("customer"));
        this.addresses = this.loggedInCustomer.addresses;
    }

}