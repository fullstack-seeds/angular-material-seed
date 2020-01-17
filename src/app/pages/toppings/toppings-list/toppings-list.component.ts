import { Component, OnInit } from '@angular/core';
import { ToppingsService } from '../../../core/services/toppings.service';
import { Observable } from 'rxjs';
import { Topping } from '../../../core/models/topping.model';

@Component({
  selector: 'app-toppings-list',
  templateUrl: './toppings-list.component.html',
  styleUrls: ['./toppings-list.component.scss']
})
export class ToppingsListComponent implements OnInit {
  toppings$: Observable<Topping[]>

  constructor(private toppingsService: ToppingsService) {
    this.toppings$ = this.toppingsService.fetch();
  }

  ngOnInit() {
  }

}
