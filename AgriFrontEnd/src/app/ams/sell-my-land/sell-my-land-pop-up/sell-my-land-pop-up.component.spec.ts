import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellMyLandPopUpComponent } from './sell-my-land-pop-up.component';

describe('SellMyLandPopUpComponent', () => {
  let component: SellMyLandPopUpComponent;
  let fixture: ComponentFixture<SellMyLandPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellMyLandPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellMyLandPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
