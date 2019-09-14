import { Injectable } from "@angular/core";
import { Product } from "../shared/models/product";
import { BehaviorSubject } from "rxjs";
import { Cart } from "../shared/models/cart";
import { Wishlist } from '../shared/models/wishlist';


@Injectable({
    providedIn: 'root'
})
export class CustomerSharedService {

    private cartList = new BehaviorSubject<Cart[]>(JSON.parse(sessionStorage.getItem("cart")));
    updatedCartList = this.cartList.asObservable();

    //////////////////////////////////////////////////////////////////////////
    private wishlist = new BehaviorSubject<Wishlist[]>(JSON.parse(sessionStorage.getItem("wishlist")));
    updatedWishlist = this.wishlist.asObservable();

    updateCartList(cartList: Cart[]) {
        this.cartList.next(cartList);
    }

    /////////////////////////////////////////////////
    updateWishlist(wishlist: Wishlist[]){
        this.wishlist.next(wishlist);
    }

}