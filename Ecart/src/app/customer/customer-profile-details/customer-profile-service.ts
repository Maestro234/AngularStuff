import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Customer } from "../../shared/models/customer";
import { environment } from "../../../environments/environment";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerProfileService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }


  updateCustomerDetails(customer: Customer): Observable<string> {
    const url = environment.updateCustomerAPI + "/updateProfile";
    return this.http.post<string>(url, JSON.stringify(customer), { headers: this.headers, responseType: 'text' as 'json' })
      .pipe(catchError(this.handleError));

  }
  private handleError(err: HttpErrorResponse) {
    let errMsg: string = '';
    console.log(err.error)
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