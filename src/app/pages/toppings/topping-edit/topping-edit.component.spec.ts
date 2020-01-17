import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingEditComponent } from './topping-edit.component';

describe('ToppingEditComponent', () => {
  let component: ToppingEditComponent;
  let fixture: ComponentFixture<ToppingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
