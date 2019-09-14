import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs'
import { Seller } from "../shared/models/seller";
import { Product } from '../shared/models/product';

@Injectable({
    providedIn:'root'
})
export class SellerSharedService{

    private loggedInSellerDetails=new BehaviorSubject<Seller>(JSON.parse(sessionStorage.getItem("seller")));
    currentSeller=this.loggedInSellerDetails.asObservable();

    // private wishlist=new BehaviorSubject<Product[]>(JSON.parse(sessionStorage.getItem("sellerWishlist")));
    // updatedWishlist = this.wishlist.asObservable();

    updateSeller(seller:Seller){
        this.loggedInSellerDetails.next(seller);
    }

    // updateSellerWishlist(product: Product[]) {
    //     this.wishlist.next(product);
    // }

}