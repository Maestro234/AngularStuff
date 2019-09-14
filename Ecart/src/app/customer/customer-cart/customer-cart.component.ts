import { Component, OnInit } from "@angular/core";
import { Cart } from "../../shared/models/cart";
import { CustomerCartService } from "./customer-cart.service";
import { CustomerSharedService } from "../customer-common-service";
import { Customer } from "../../shared/models/customer";
import { Product } from '../../shared/models/product';



@Component({
    selector: 'customer-cart',
    templateUrl: './customer-cart.component.html'
})
export class CustomerCartComponent implements OnInit {
    cartList: Cart[] = [];
    selectedCartProduct: Cart;
    viewCartProductDetails: boolean = false;
    successMessage: string;
    errorMessage: string;
    
    ngOnInit(): void {
        this.cartList = JSON.parse(sessionStorage.getItem("cart"));
        this.viewCartProductDetails = false;
    }

    constructor(private customerCartService: CustomerCartService, private customerSharedService: CustomerSharedService) { }
    
    
    setSelectedCart(cart: Cart) {
        this.successMessage = "";
        this.errorMessage = "";
        this.viewCartProductDetails = true;
        this.selectedCartProduct = cart;

    }


    deleteProductFromCart(cart: Cart) {
        let loggedInCustomer: Customer = JSON.parse(sessionStorage.getItem("customer"));
        this.customerCartService.deleteProductFromCart(cart, loggedInCustomer.emailId).subscribe(
            message => {
                let cartList: Cart[] = JSON.parse(sessionStorage.getItem("cart"));
                cartList = cartList.filter(item => item.cartId !== cart.cartId);
                this.cartList = cartList;
                this.customerSharedService.updateCartList(cartList);
                sessionStorage.setItem("cart", JSON.stringify(cartList));
                this.successMessage = message;
            }, error => this.errorMessage = <any>error
        )

    }

}