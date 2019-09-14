import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Product } from '../../shared/models/product';

import { environment } from '../../../environments/environment';
import { Cart } from '../../shared/models/cart';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Customer } from '../../shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class ViewAllProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {

    let url = environment.CustomerProductAPI + "/getAllProducts";
    return this.http.get<Product[]>(url)
      .pipe(catchError(this.handleError));

  }

  addToCart(cart: Cart): Observable<Cart> {
    // const url = environment.customerAPIUrl + '/customrLogin';
    let loggedInCustomer: Customer = JSON.parse(sessionStorage.getItem("customer"));
    let url:string = "http://localhost:8080/EKart/CustomerCartAPI/addProductToCart/" + loggedInCustomer.emailId
    return this.http.post<Cart>(url, cart)
      .pipe(catchError(this.handleError));

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
