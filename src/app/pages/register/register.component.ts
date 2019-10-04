import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  signup(event, username, password) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }
}
