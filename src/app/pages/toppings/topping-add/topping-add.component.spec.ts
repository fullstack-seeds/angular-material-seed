import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingAddComponent } from './topping-add.component';

describe('ToppingAddComponent', () => {
  let component: ToppingAddComponent;
  let fixture: ComponentFixture<ToppingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
