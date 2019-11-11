import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { ConfigService } from './config.service';
import { User, LoginResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  create(user: User) {
    return this.http.post(
      this.config.getUrl('users'),
      user
    );
  }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(
      this.config.getUrl('users/login'),
      { email, password }
    );
  }
}
