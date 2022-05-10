//This service provides methods to access public and protected resources.
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpErrorResponse, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

const API_URL = 'http://localhost:8090/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  endpoint: string = 'http://localhost:8090/api/test';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
    constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    let api = `${this.endpoint}/user`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      })
    );
    //return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getAdminBoard(): Observable<any> {
    let api = `${this.endpoint}/admin`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      })
    );
    //return this.http.get(API_URL + 'admin',{ headers: this.headers ,responseType: 'text' });
  }
}
