import { Component, OnInit, Input } from '@angular/core';
import { Wishlist } from '../../shared/models/wishlist';
import { CustomerWishlistService } from './customer-wishlist.service';
import { Product } from '../../shared/models/product';
import { Customer } from '../../shared/models/customer';
import { CustomerSharedService } from '../customer-common-service';
import { CustomerCartService } from '../customer-cart/customer-cart.service';
import { DatePipe } from '../../shared/pipes/date-converter.pipe';
import { CustomerHomeComponent } from '../customer-home/customer-home.component';
import { CustomerHomeService } from '../customer-home/customer-home.service';

@Component({
  selector: 'app-customer-wishlist',
  templateUrl: './customer-wishlist.component.html',
  styleUrls: ['./customer-wishlist.component.css']
})
export class CustomerWishlistComponent implements OnInit {

  wishList: Wishlist[]=[];
  selectedProduct: Product;
  viewWishlistProductDetails: boolean;
  successMessage:string ="";
  errorMessage:string ="";
  loading: boolean;

  constructor(private customerCartSrvc:CustomerCartService, 
    private customerWishlistSrvc: CustomerWishlistService, 
    private customerSharedService: CustomerSharedService,
    private customerHomeService: CustomerHomeService) { }

  setSelectedProduct(product: Product) {
    this.successMessage = "";
    this.errorMessage = "";
    this.viewWishlistProductDetails = true;
    this.selectedProduct = product;

}

  ngOnInit() {
    //this.wishList = JSON.parse(sessionStorage.getItem("wishlist"));
    //this is th getCustomerWishlist from customerHomeComponent
    this.customerHomeService.getCustomerWishlist(JSON.parse(sessionStorage.getItem("customer")).emailId)
    .subscribe(
      wish => {
          this.wishList = wish;
          sessionStorage.setItem("wishlist", JSON.stringify(this.wishList));
          this.customerSharedService.updateWishlist(this.wishList);
          this.loading = true;
      }
  )
  }


  
//added
  deleteProductFromWishlist(wish: Wishlist ) {
    let loggedInCustomer: Customer = JSON.parse(sessionStorage.getItem("customer"));
    this.customerWishlistSrvc.deleteProductFromWishlist(loggedInCustomer.emailId, wish).subscribe(
      message => {
        let wishList: Wishlist[] = JSON.parse(sessionStorage.getItem("wishlist"));//get wishlist from browser
        wishList = wishList.filter(item => item.wishListId !== wish.wishListId);//remove the selected product
        this.wishList = wishList;
        this.customerSharedService.updateWishlist(wishList);
        sessionStorage.setItem("wishlist", JSON.stringify(wishList));
        this.successMessage = message;
      }, error => this.errorMessage = <any>error
    )
  }


  //added
  addProductToCart() {
    let loggedInCustomer: Customer = JSON.parse(sessionStorage.getItem("customer"));   
    this.customerCartSrvc.addProductToCart(this.selectedProduct, loggedInCustomer.emailId)
    .subscribe(
        data => this.successMessage = data,
        error => this.errorMessage = <any>error
    )
}

}
