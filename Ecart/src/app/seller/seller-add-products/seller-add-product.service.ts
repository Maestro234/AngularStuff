import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../../shared/models/product';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class SellerAddProductService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  addProduct(productToAdd: Product, sellerEmailId): Observable<string> {
    const url = environment.productAPIUrl + '/addProductToSellerCatalog/' + sellerEmailId;
    return this.http.post<string>(url, productToAdd, { headers: this.headers, responseType: 'text' as 'json' })//Line 1      
      .pipe(catchError(this.handleError));

  }

  getProductCategories(): Observable<string[]> {
    const url = environment.productAPIUrl + "/getProductCategories";
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
