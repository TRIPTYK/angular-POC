import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from "moment";
import { User } from '../model/user.model';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,public router: Router) { }

  authenticate(email: string,password: string) {
    const observer = this.http.post('http://todolist.triptyk.eu/api/v1/auth/login', {email, password},{headers : this.headers});
    return observer.toPromise().then(this.setSession);
  } 

  invalidateSession(): void { 
    localStorage.setItem('access', "null");
    localStorage.setItem('refresh', "null");
    localStorage.setItem("expires", "null" );
    this.router.navigate(['login']);
  }

  get headers() {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken || "No access Token",
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json"
    });
  }

  get isAuthenticated() {
    return localStorage.getItem("access") !== "null";
  }

  get accessToken() {
    return localStorage.getItem("access");
  }

  get refreshToken() {
    return localStorage.getItem("refresh");
  }

  private setSession(authResult) {
    const decodedAccess = jwt_decode(authResult.accessToken); 
    localStorage.setItem('access', authResult.accessToken);
    localStorage.setItem('refresh', authResult.refreshToken);
    localStorage.setItem("expires", decodedAccess.exp );
  }    
}
