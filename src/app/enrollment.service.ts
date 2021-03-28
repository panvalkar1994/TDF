import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Spartan } from './spartan';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = 'http://localhost:3000/enroll';
  constructor(private _http:HttpClient) { }

  enroll(spartan:Spartan){
    return this._http.post(this._url,spartan);
  }
}
