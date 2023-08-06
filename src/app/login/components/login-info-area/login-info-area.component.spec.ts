import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfoAreaComponent } from './login-info-area.component';

describe('LoginInfoAreaComponent', () => {
  let component: LoginInfoAreaComponent;
  let fixture: ComponentFixture<LoginInfoAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginInfoAreaComponent]
    });
    fixture = TestBed.createComponent(LoginInfoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
