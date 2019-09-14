import { Component, OnInit } from '@angular/core';
import { Seller } from '../../shared/models/seller';
import { Product } from '../../shared/models/product';
import { ViewWishlistedProductsService } from './view-wishlisted-products.service';

@Component({
  selector: 'app-seller-wishlisted-products',
  templateUrl: './seller-wishlisted-products.component.html',
  styleUrls: ['./seller-wishlisted-products.component.css']
})
export class SellerWishlistedProductsComponent implements OnInit {
    isViewProductSelected: boolean = false;
    optionSelected: string;
    loggedInSeller: Seller;
    productList: Product[];
    sellerProducts;
    tryingToLoad:boolean;

  constructor(private sellerWishlistSrvc: ViewWishlistedProductsService) { }

  ngOnInit() {
    this.getWishlistedProducts();
  }

  //method saves the seller wishlist to the browser
  getWishlistedProducts() {
    let loggedInSeller: Seller = JSON.parse(sessionStorage.getItem("seller"));
    this.sellerWishlistSrvc.getWishlistedProducts(loggedInSeller.emailId)
    .subscribe(
        products => this.productList = products);
        console.log(this.productList);
        sessionStorage.setItem("sellerWishlist", JSON.stringify(this.productList));//saves in the tab using the name sellerWishlist
}

selectedProduct:boolean;
selected: Product;

selectThatProduct(product: Product){
  this.selectedProduct = !this.selectedProduct;
  this.selected = product;
}

}
