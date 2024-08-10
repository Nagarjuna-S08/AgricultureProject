import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmLandsComponent } from './farm-lands.component';

describe('FarmLandsComponent', () => {
  let component: FarmLandsComponent;
  let fixture: ComponentFixture<FarmLandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmLandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
