import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginInfoAreaComponent } from './components/login-info-area/login-info-area.component';
import { LoginFormAndMessageComponent } from './components/login-form-and-message/login-form-and-message.component';
import { LoginSucessMessageComponent } from './components/login-sucess-message/login-sucess-message.component';
import { BaseModule } from '../base/base.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, LoginInfoAreaComponent, LoginFormAndMessageComponent, LoginSucessMessageComponent],
      imports: [BaseModule]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
