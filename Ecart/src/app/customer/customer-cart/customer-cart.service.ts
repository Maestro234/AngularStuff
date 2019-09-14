
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Cart } from "../../shared/models/cart";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../../shared/models/product';


@Injectable({
    providedIn: 'root'
})
export class CustomerCartService {
    private headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    constructor(private http: HttpClient) { }

    deleteProductFromCart(cart: Cart, customerEmailId: string): Observable<string> {
        let url: string = environment.customerCartUrl + "/deleteProductFromCart/" + customerEmailId;
        return this.http.post<string>(url, cart.cartId, { headers: this.headers, responseType: 'text' as 'json' })
            .pipe(
                catchError(this.handleError)
            );

    }


    ///////////////////////////////////////////////////
    addProductToCart(product: Product, customerEmailId: string): Observable<string> {
        console.log("in customer cart service")
        let url: string = environment.customerCartUrl + "/addProductToCart/" + customerEmailId;
        return this.http.post<string>(url, {product,quantity:1})
        .pipe(catchError(this.handleError));
        
      }


    updateCart(cart: Cart): Observable<string> {
        let url: string = environment.customerCartUrl + "/modifyQuantityInCart";
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<string>(url, cart, { headers: headers, responseType: 'text' as 'json' })
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