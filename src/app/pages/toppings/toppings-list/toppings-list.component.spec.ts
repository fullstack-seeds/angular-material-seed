import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingsListComponent } from './toppings-list.component';

describe('ToppingsListComponent', () => {
  let component: ToppingsListComponent;
  let fixture: ComponentFixture<ToppingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
