import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormAndMessageComponent } from './login-form-and-message.component';
import { BaseModule } from 'src/app/base/base.module';
import { LoginSucessMessageComponent } from '../login-sucess-message/login-sucess-message.component';

describe('LoginFormAndMessageComponent', () => {
  let component: LoginFormAndMessageComponent;
  let fixture: ComponentFixture<LoginFormAndMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormAndMessageComponent, LoginSucessMessageComponent],
      imports: [BaseModule]
    });
    fixture = TestBed.createComponent(LoginFormAndMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
