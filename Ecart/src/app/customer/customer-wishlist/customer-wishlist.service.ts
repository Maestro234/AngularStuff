import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../shared/models/product';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Wishlist } from '../../shared/models/wishlist';


/*I made this whole service class*/


@Injectable({
  providedIn: 'root'
})
export class CustomerWishlistService {

    private headers = new HttpHeaders ({ 'Content-Type': 'text/plain' });
    constructor(private http: HttpClient, private customerWishlistSrvc: CustomerWishlistService) { }

    //added
    getWishlist(customerEmailId: string): Observable<Wishlist[]> {
        let url = environment.customerWishlistAPI + "/getCustomerWishList";
        return this.http.post<Wishlist[]>(url, customerEmailId).pipe(catchError(this.handleError));
    }


    //added
    addProductToWishlist(product:Product, customerEmailId: string): Observable<string> {
      let url: string = environment.customerWishlistAPI + "/addProductToWishList/" + customerEmailId;
      return this.http.post<string>(url, {product}, {responseType:'text' as 'json'});
    }

    //added
    deleteProductFromWishlist(customerEmailId: string, list: Wishlist) {
      let url: string = environment.customerWishlistAPI + "/deleteProductFromWishList/" + customerEmailId;
      return this.http.post<string>(url, list.wishListId, {responseType:'text' as 'json'})
      .pipe(catchError(this.handleError));
}


    private handleError(err: HttpErrorResponse) {
        console.log(err);
      let errMsg: string = '';
      if (err.error instanceof Error) {
          errMsg = err.error.message;
      } else {
          if (err.status == 0) {
              errMsg = "A connection to back end can not be established.";
          } else {
              errMsg = err.error.errorMessage;
          }
      }

      return throwError(errMsg);
  }
}
