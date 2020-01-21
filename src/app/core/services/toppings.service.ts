import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topping, ToppingRequest } from '../models/topping.model';

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

  public create(aTopping: ToppingRequest): Observable<Topping> {
    return this.http.post<Topping>('https://pizza-creator-api-expressjs.herokuapp.com/api/toppings', aTopping, httpOptions);
  }
}
