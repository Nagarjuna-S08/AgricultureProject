import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCartComponent } from './profile-cart.component';

describe('ProfileCartComponent', () => {
  let component: ProfileCartComponent;
  let fixture: ComponentFixture<ProfileCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
