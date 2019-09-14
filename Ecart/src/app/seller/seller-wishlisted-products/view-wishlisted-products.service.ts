import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Product } from '../../shared/models/product';


@Injectable({
  providedIn: 'root'
})
export class ViewWishlistedProductsService {

  constructor(private http: HttpClient) { }

  getWishlistedProducts(customerEmailId: string): Observable<Product[]> {
    let url = environment.sellerWishlistProductsAPI + "/getSellerWishList"
    return this.http.post<Product[]>(url, customerEmailId).pipe(catchError(this.handleError))
  }
  

  private handleError(err: HttpErrorResponse) {
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
