import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Cart } from "../../shared/models/cart";
import { catchError } from 'rxjs/operators';
import { Wishlist } from '../../shared/models/wishlist';




@Injectable({
    providedIn: 'root'
})
export class CustomerHomeService {
    private headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    constructor(private http: HttpClient) { }
    getCustomerCart(emailId: string): Observable<Cart[]> {
        let url: string = environment.customerCartUrl + "/getCustomerCart";
        return this.http.post<Cart[]>(url, emailId, { headers: this.headers })
            .pipe(catchError(this.handleError));

    }

    getCustomerWishlist(customerEmailId: string): Observable<Wishlist[]> {
        let url: string = environment.customerWishlistAPI + "/getCustomerWishList";
        return this.http.post<Wishlist[]>(url, customerEmailId)
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