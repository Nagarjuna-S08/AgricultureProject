import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackingTakenComponent } from './order-tracking-taken.component';

describe('OrderTrackingTakenComponent', () => {
  let component: OrderTrackingTakenComponent;
  let fixture: ComponentFixture<OrderTrackingTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTrackingTakenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTrackingTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
