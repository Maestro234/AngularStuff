import { Component, OnInit, Input } from "@angular/core";
import { Cart } from "../../../shared/models/cart";
import { CustomerCartService } from "../customer-cart.service";
import { CustomerSharedService } from "../../customer-common-service";




@Component({
    selector: 'view-cart-product-detail',
    templateUrl: './view-cart-product-detail.component.html'
})
export class ViewCartProductDetail implements OnInit {

    @Input()
    selectedCartProduct: Cart;

    successMessage: string;
    errorMessage: string;
    ngOnInit(): void {
    }

    constructor(private customerService: CustomerCartService,
        private sharedService: CustomerSharedService) { }
    alter(operation: string) {
        if (operation == '-') this.selectedCartProduct.quantity--;
        else this.selectedCartProduct.quantity++;
    }

    updateCart() {
        this.customerService.updateCart(this.selectedCartProduct).subscribe(
            message => {
                this.successMessage = message;
                let cartList: Cart[] = JSON.parse(sessionStorage.getItem("cart"));
                let index = cartList.findIndex(item => item.cartId == this.selectedCartProduct.cartId);
                cartList[index] = this.selectedCartProduct;
                this.sharedService.updateCartList(cartList);
                sessionStorage.setItem("cart", JSON.stringify(cartList));


            }, error => this.errorMessage = <any>error
        )

    }




}