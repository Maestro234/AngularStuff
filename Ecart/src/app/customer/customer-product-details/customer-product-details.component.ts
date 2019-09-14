import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../shared/models/product";
import { CustomerSharedService } from "../customer-common-service";
import { Wishlist } from '../../shared/models/wishlist';
import { Customer } from '../../shared/models/customer';
import { CustomerWishlistService } from '../customer-wishlist/customer-wishlist.service';
import { CustomerCartService } from '../customer-cart/customer-cart.service';
import { Cart } from '../../shared/models/cart';



@Component({
    selector: "customer-product-details",
    templateUrl: "./customer-product-details.component.html"
})
export class CustomerProductDetails implements OnInit {
    @Input()
    selectedProduct: Product;
    addToCart: boolean = false;
    ////////////////////////
    wish: Wishlist[];
    viewWishlistProductDetail: boolean;
    successMessage: string;
    errorMessage: string; 
    selectedCart: Cart;

    ngOnInit(): void {
        this.viewWishlistProductDetail = false;
    }


    constructor(private customerCartSrvc:CustomerCartService, private customerSharedsrvc: CustomerSharedService, private wishlistSrvc: CustomerWishlistService) { }


    //this method sets the product on click
    setSelectedProduct(product: Product) {
        this.successMessage = "";
        this.errorMessage = "";
        this.viewWishlistProductDetail = true;
        this.selectedProduct = product;
    }

    ///////////////////////////////add to cart implementation----not needed
    // setSelectedCart(cart: Cart) {
    //     this.successMessage = "";
    //     this.errorMessage = "";
    //     this.viewWishlistProductDetail = true;
    //     this.selectedCart = cart;
    // }

    //Adding to wishlist method
    //get the user emailId from the session
    addProductToWishlist() {
        //putting customer in browser tab
        let loggedInCustomer: Customer = JSON.parse(sessionStorage.getItem("customer"));   
        this.wishlistSrvc.addProductToWishlist(this.selectedProduct, loggedInCustomer.emailId)
        .subscribe(
            data => {
                this.successMessage = data;
                //when added sussessfully, fetch the wishlist
                this.wishlistSrvc.getWishlist(loggedInCustomer.emailId).subscribe(
                    response => {
                        //update the sessionStorage (wishlist is updated in the browser tab)
                        this.customerSharedsrvc.updateWishlist(response)
                    }
                )
            },
            error => {
                this.errorMessage = error.error;
            }
        )
    }


    //not needed
    // addProductToCart() { 
    //     let loggedInCustomer: Customer = JSON.parse(sessionStorage.getItem("customer"));  
    //     this.customerCartSrvc.addProductToCart(this.selectedProduct, loggedInCustomer.emailId)
    //     .subscribe(
    //         data => this.successMessage = data,
    //         error => this.errorMessage = <any>error
    //     )
    // }


}