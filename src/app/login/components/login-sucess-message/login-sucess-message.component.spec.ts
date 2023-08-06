import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSucessMessageComponent } from './login-sucess-message.component';

describe('LoginSucessMessageComponent', () => {
  let component: LoginSucessMessageComponent;
  let fixture: ComponentFixture<LoginSucessMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSucessMessageComponent]
    });
    fixture = TestBed.createComponent(LoginSucessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
