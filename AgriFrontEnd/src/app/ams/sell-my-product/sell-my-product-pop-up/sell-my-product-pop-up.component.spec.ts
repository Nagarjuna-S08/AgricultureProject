import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellMyProductPopUpComponent } from './sell-my-product-pop-up.component';

describe('SellMyProductPopUpComponent', () => {
  let component: SellMyProductPopUpComponent;
  let fixture: ComponentFixture<SellMyProductPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellMyProductPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellMyProductPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
