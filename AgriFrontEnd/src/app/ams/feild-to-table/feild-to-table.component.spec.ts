import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeildToTableComponent } from './feild-to-table.component';

describe('FeildToTableComponent', () => {
  let component: FeildToTableComponent;
  let fixture: ComponentFixture<FeildToTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeildToTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeildToTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
