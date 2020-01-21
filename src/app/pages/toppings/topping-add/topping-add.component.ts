import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToppingsService } from '../../../core/services/toppings.service';
import { ToppingRequest } from '../../../core/models/topping.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topping-add',
  templateUrl: './topping-add.component.html',
  styleUrls: ['./topping-add.component.scss']
})
export class ToppingAddComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private toppingsService: ToppingsService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      icon: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      let newTopping = new ToppingRequest(
        this.form.value.name,
        this.form.value.description,
        this.form.value.price,
        this.form.value.icon
      );
      this.toppingsService.create(newTopping).subscribe(response => this.router.navigate(['pages/toppings']));
    }
  }

}
