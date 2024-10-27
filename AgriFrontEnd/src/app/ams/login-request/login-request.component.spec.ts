import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequestComponent } from './login-request.component';

describe('LoginRequestComponent', () => {
  let component: LoginRequestComponent;
  let fixture: ComponentFixture<LoginRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
