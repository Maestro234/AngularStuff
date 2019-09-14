import { Component, OnInit } from "@angular/core";
import { Customer } from "../../shared/models/customer";
import { Router, ActivatedRoute } from "@angular/router";
import { CustomerHomeService } from "./customer-home.service";
import { Cart } from "../../shared/models/cart";
import { CustomerSharedService } from "../customer-common-service";
import { Wishlist } from '../../shared/models/wishlist';


@Component({
    selector: 'customer-home',
    templateUrl: './../customer-home/customer-home.component.html',
    styleUrls: ['./customer-home.component.css']

})
export class CustomerHomeComponent {
    isViewProductSelected: boolean = false;
    isRouting: boolean = false;
    optionSelected: string;
    loggedInCustomer: Customer;
    searchText: string;
    cart: Cart[] = [];
    wishlist: Wishlist[]= [];


    constructor(private router: Router, private route: ActivatedRoute,
        private customerHomeService: CustomerHomeService, private customerSharedService: CustomerSharedService) {

    }

    ngOnInit() {
        //putting customer in the sessionStorage (browser tab)
        this.loggedInCustomer = JSON.parse(sessionStorage.getItem("customer"));
        //get customers cart and wishlist once logged in
        this.getCustomerCart();
        this.getCustomerWishlist();
    }

    getAllProducts() {
        this.isViewProductSelected = !this.isViewProductSelected;
    }
    
    getCustomerCart() {
        this.customerSharedService.updatedCartList.subscribe(cartList => this.cart = cartList)
        this.customerHomeService.getCustomerCart(this.loggedInCustomer.emailId).subscribe(
            cart => {
                this.cart = cart;
                sessionStorage.setItem("cart", JSON.stringify(this.cart));

            }
        )
    }

    //save wishlist to browser tab
    getCustomerWishlist() {
        this.customerSharedService.updatedWishlist.subscribe(wishList =>{
            this.wishlist = wishList;
        } )
        //get the customer wihslist passing in the emailId
        //.subscribe every time there is a change (take wish being emitted and set it to this.wishlist)
        //Async
        this.customerHomeService.getCustomerWishlist(this.loggedInCustomer.emailId).subscribe(
            wish => {
                this.wishlist = wish;
                //save in browser tab as "wishlist"
                sessionStorage.setItem("wishlist", JSON.stringify(this.wishlist));
            }
        )
    }

    chosenOptionValue = ""
    chosenOption(chosenOption: string) {
        this.isRouting = true;
        this.chosenOptionValue = chosenOption
        this.optionSelected = chosenOption;
        if (chosenOption == "viewDetails") {
            this.router.navigate(["details"], { relativeTo: this.route });
        }
        else if (chosenOption == "cart") {
            this.router.navigate(["cart"], { relativeTo: this.route });
        }
        else if (chosenOption == "wishlist") {
            this.router.navigate(["wishlist"], { relativeTo: this.route });
        }
        else if (chosenOption == "getAllProducts") {
            this.isViewProductSelected = true;
            this.router.navigate(["products"], { relativeTo: this.route });
        }
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate([""])
    }
}