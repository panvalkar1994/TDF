import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Spartan } from './spartan';
import { throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = 'http://localhost:3000/enroll';
  constructor(private _http:HttpClient) { }

  enroll(spartan:Spartan){
    return this._http.post(this._url,spartan)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
