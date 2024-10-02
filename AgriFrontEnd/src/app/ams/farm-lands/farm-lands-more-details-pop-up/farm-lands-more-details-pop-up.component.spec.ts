import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmLandsMoreDetailsPopUpComponent } from './farm-lands-more-details-pop-up.component';

describe('FarmLandsMoreDetailsPopUpComponent', () => {
  let component: FarmLandsMoreDetailsPopUpComponent;
  let fixture: ComponentFixture<FarmLandsMoreDetailsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmLandsMoreDetailsPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmLandsMoreDetailsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
