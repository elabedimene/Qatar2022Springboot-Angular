import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Game} from '../game' ; 
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public  apiURL = 'http://localhost:8090/api';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  
  

  getAll(): Observable<any> {
      return this.httpClient.get(this.apiURL + '/Games', this.httpOptions )
      
  }

  getgame(id : any): Observable<any> {
    return this.httpClient.get(this.apiURL + '/Game/' + {id}, this.httpOptions )
    
}

  create(data : any): Observable<any> {
   
    return this.httpClient.post(this.apiURL + '/addGame', data , this.httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(this.apiURL + '/updateGame' + {id}, data);
  }

  delete(id: number): Observable<any> {
    console.log(typeof(id));
    var id2= ""+id;
    return this.httpClient.delete(this.apiURL + '/Game/' + id ,this.httpOptions);
  }
  
}
