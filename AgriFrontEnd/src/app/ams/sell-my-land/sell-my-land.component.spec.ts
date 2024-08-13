import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellMyLandComponent } from './sell-my-land.component';

describe('SellMyLandComponent', () => {
  let component: SellMyLandComponent;
  let fixture: ComponentFixture<SellMyLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellMyLandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellMyLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
