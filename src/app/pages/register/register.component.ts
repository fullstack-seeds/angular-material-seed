import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../core/services/users.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    public router: Router, 
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', []],
      phone: ['', []]
    });
  }

  ngOnInit() {
  }

  onRegister() {
    event.preventDefault();
    let newUser: User = {
      name: this.form.value.name,
      password: this.form.value.password,
      email: this.form.value.email,
      address: this.form.value.address,
      phone: this.form.value.phone
    }
    return this.usersService.create(newUser).subscribe(response => {
      console.log(response);
      this.router.navigate(['login']);
    })
  }
}
