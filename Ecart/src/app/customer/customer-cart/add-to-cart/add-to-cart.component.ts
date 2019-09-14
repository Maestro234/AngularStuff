import { OnInit, Component, Input } from "@angular/core";
import { Product } from "../../../shared/models/product";
import { Customer } from '../../../shared/models/customer';


@Component({
    selector: 'add-to-cart',
    templateUrl: './add-to-cart.component.html'
})
export class AddToCart implements OnInit {
    @Input()
    productToAdd: Product;
    ngOnInit(): void {

    }

    // addProductToCart() {
    //     //this.addToCart = true;
    //     let loggedInCustomer: Customer = JSON.parse(sessionStorage.getItem("customer"));   
    //     console.log("add invoked");
        
    // }
}