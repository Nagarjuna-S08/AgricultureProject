import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellMyProductComponent } from './sell-my-product.component';

describe('SellMyProductComponent', () => {
  let component: SellMyProductComponent;
  let fixture: ComponentFixture<SellMyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellMyProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellMyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
