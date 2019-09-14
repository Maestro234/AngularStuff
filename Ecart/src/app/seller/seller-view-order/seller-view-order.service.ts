import { Injectable } from '@angular/core';
import { Orders } from '../../shared/models/order';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class SellerViewOrderService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getAllOrders(sellerEmailId): Observable<Orders[]> {
    const url = environment.sellerOrderAPI + "/viewOrders";
    return this.http.post<Orders[]>(url, sellerEmailId, { headers: this.headers })
      .pipe(catchError(this.handleError));

  }

  updateOrder(orderId, orderStatus): Observable<string> {
    const url = environment.sellerOrderAPI + "/updateOrderStatus/" + orderId + "/" + orderStatus;
    return this.http.post<string>(url, orderStatus, { headers: this.headers, responseType: 'text' as 'json' })
      .pipe(catchError(this.handleError));

  }


  getAllOrderStatus(): Observable<string[]> {
    const url = environment.sellerOrderAPI + "/getAllOrderStatus";
    return this.http.get<string[]>(url)
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

