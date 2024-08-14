import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackingIncomingComponent } from './order-tracking-incoming.component';

describe('OrderTrackingIncomingComponent', () => {
  let component: OrderTrackingIncomingComponent;
  let fixture: ComponentFixture<OrderTrackingIncomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTrackingIncomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTrackingIncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
