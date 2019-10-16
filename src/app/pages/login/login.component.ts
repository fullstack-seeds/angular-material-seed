import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    public router: Router, 
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onLogin() {
    event.preventDefault();
    this.usersService.login(this.form.value.email, this.form.value.password).subscribe(response => {
      console.log(response);
      localStorage.setItem('isLoggedin', 'true');
      this.router.navigate(['pages']);
    });
  }

  register(event) {
    event.preventDefault();
    this.router.navigate(['register']);
  }
}
