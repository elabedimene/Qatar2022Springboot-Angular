//to manages token and user information (username, email, roles) 
//inside Browser’s Session Storage
import { Injectable } from '@angular/core';
const TOKEN_KEY = 'access_token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  signOut(): void {
    localStorage.clear();
  }
  public saveToken(token: string): any {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
    console.log("from save Token");
    return (token)
  }
  public getToken(): any {
    return localStorage.getItem(TOKEN_KEY);
    
    
  }
  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    console.log(user);
    if (user) {
      return JSON.parse(user);
      
      
    }
    return {};
  }
  
}