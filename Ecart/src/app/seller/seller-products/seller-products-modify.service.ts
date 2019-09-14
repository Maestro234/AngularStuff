import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Product } from '../../shared/models/product';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SellerProductsModifyService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getProductCategories(): Observable<string[]> {
    const url = environment.productAPIUrl + "/getProductCategories";
    return this.http.get<string[]>(url)
      .pipe(catchError(this.handleError));

  }


  updateProductDetails(product: Product, sellerEmailId: string): Observable<string> {
    const url = environment.SellerProductManagementAPI + "/modifyProductDetails/" + sellerEmailId;
    return this.http.post<string>(url,JSON.stringify(product), { headers: this.headers, responseType: 'text' as 'json' })
      .pipe(catchError(this.handleError));

  }


  removeProductFromSeller(product: Product, sellerEmailId: string): Observable<string> {
    const url = environment.SellerProductManagementAPI + "/removeProduct/" + sellerEmailId;
    return this.http.post<string>(url, JSON.stringify(product.productId), { headers: this.headers, responseType: 'text' as 'json' })
      .pipe(
       
        catchError(this.handleError));

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

