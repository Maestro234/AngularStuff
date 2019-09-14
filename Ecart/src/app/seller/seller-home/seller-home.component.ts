import { Component, OnInit } from "@angular/core";
import { Seller } from "../../shared/models/seller";
import { Router, ActivatedRoute } from "@angular/router";
import { SellerSharedService } from "../seller-shared.service";
import { ViewWishlistedProductsService } from '../seller-wishlisted-products/view-wishlisted-products.service';
import { Product } from '../../shared/models/product';


@Component({
    selector: 'seller-home',
    templateUrl: './../seller-home/seller-home.component.html',

})
export class SellerHomeComponent implements OnInit {
    isViewProductSelected: boolean = false;
    optionSelected: string;
    loggedInSeller: Seller;
    productList: Product[];

    constructor(private sellerWishlistSrvc: ViewWishlistedProductsService, private router: Router, private route: ActivatedRoute, private sharedService: SellerSharedService) {
    }

    ngOnInit() {
        this.sharedService.currentSeller.subscribe(seller => this.loggedInSeller = seller);
        this.loggedInSeller = JSON.parse(sessionStorage.getItem("seller"));
        //this.getWishlistedProducts();//get the sellers wishlist once logged in 
    }


    // //method saves the seller wishlist to the browser
    // getWishlistedProducts() {
    //     let loggedInSeller: Seller = JSON.parse(sessionStorage.getItem("seller"));
    //     this.sharedService.updatedWishlist.subscribe(product => this.productList = product)
    //     this.sellerWishlistSrvc.getWishlistedProducts(loggedInSeller.emailId)
    //     .subscribe(
    //         products => this.productList = products);
    //         console.log(this.productList);
    //         sessionStorage.setItem("sellerWishlist", JSON.stringify(this.productList));//saves in the tab using the name sellerWishlist
    // }

    getAllProducts() {
        this.isViewProductSelected = !this.isViewProductSelected;
    }

    chosenOption(chosenOption: string) {
        this.optionSelected = chosenOption;
        if (chosenOption == "viewProfile") {
            this.router.navigate(["profile"], { relativeTo: this.route });
        } 
        else if (chosenOption == "sellerWishlist") {

            this.router.navigate(["sellerWishlist"], { relativeTo: this.route })
        }
        else if (chosenOption == "viewAllProducts") {

            this.router.navigate(["viewProducts"], { relativeTo: this.route });
        } 
        else if (chosenOption == "changePassword") {

            this.router.navigate(["changePassword"], { relativeTo: this.route });
        }
        else if (chosenOption == "viewAllOrders") {

            this.router.navigate(["viewOrders"], { relativeTo: this.route });
        }
        else if (chosenOption == "addNewProduct") {

            this.router.navigate(["addProduct"], { relativeTo: this.route });
        }

    }

    update(seller: Seller) {
        this.loggedInSeller = seller;
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(["seller"]);
    }

}