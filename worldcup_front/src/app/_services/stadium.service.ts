import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
  public  apiURL = 'http://localhost:8090/api';


  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient ) { }
  
  

  getAll(): Observable <any> {
      return this.httpClient.get(this.apiURL + '/Stadiums' , this.httpOptions)
      
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiURL + '/addStadium', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(this.apiURL + '/updateStadium/' + id, data);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/Stadium/' + id, this.httpOptions);
  }
}
