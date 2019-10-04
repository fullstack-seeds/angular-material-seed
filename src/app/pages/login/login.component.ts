import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login(event, username, password) {
    event.preventDefault();
    this.router.navigate(['pages']);
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}
