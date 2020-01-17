import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topping } from '../models/topping.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {

  constructor(private http: HttpClient) { }

  public fetch(): Observable<Topping[]> {
    return this.http.get<Topping[]>('https://pizza-creator-api-expressjs.herokuapp.com/api/toppings', httpOptions);
  }
}
