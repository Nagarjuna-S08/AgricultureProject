import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPopUpComponent } from './order-pop-up.component';

describe('OrderPopUpComponent', () => {
  let component: OrderPopUpComponent;
  let fixture: ComponentFixture<OrderPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
