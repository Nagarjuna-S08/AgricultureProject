import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWishlistComponent } from './profile-wishlist.component';

describe('ProfileWishlistComponent', () => {
  let component: ProfileWishlistComponent;
  let fixture: ComponentFixture<ProfileWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
