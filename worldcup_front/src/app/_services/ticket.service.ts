import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  public  apiURL = 'http://localhost:8090/api';


  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient ) { }
  
  getAllCateg(): Observable <any> {
    return this.httpClient.get(this.apiURL + '/Categorys' , this.httpOptions)
    
}

  create(data : any): Observable<any> {
   
    return this.httpClient.post(this.apiURL + '/addTicket', data , this.httpOptions);
  }

}
