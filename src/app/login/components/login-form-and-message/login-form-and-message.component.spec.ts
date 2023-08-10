import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormAndMessageComponent } from './login-form-and-message.component';
import { BaseModule } from 'src/app/base/base.module';
import { LoginSucessMessageComponent } from '../login-sucess-message/login-sucess-message.component';
import { FormBuilder } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MailService } from 'src/app/shared/services/mail.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('LoginFormAndMessageComponent', () => {
  let component: LoginFormAndMessageComponent;
  let fixture: ComponentFixture<LoginFormAndMessageComponent>;
  let mailService: MailService;
  let sendEmailSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormAndMessageComponent, LoginSucessMessageComponent],
      imports: [BaseModule, NoopAnimationsModule],
      providers: [
        FormBuilder,
        MailService,
        MatSnackBar
      ]
    });
    fixture = TestBed.createComponent(LoginFormAndMessageComponent);
    component = fixture.componentInstance;
    mailService = TestBed.inject(MailService);
    sendEmailSpy = spyOn(mailService, 'sendEmail');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send email if form data are wrong', () => {
    component.formLogin.setValue({
      name: 'A',
      phone: '',
      email: '@pepe.com',
      dni: '',
      contact: 'M',
      accept: false
    });
    component.sendForm();

    expect(component.hasErrors('name')).toBeTruthy();
    expect(component.hasErrors('phone')).toBeTruthy();
    expect(component.hasErrors('email')).toBeTruthy();
    expect(component.hasErrors('dni')).toBeTruthy();
    expect(component.hasErrors('accept')).toBeTruthy();

    expect(component.getErrors('name').length).toBeGreaterThan(0);

    expect(sendEmailSpy).not.toHaveBeenCalled();
  });

  describe('if form data are correct', () => {
    beforeEach(() => {
      sendEmailSpy.and.returnValue(Promise.resolve({ status: 200}));

      component.formLogin.setValue({
        name: 'Pepe',
        phone: '624216052',
        email: 'fakemail@google.com',
        dni: '52873045A',
        contact: 'T',
        accept: true
      });
      component.sendForm();
    });

    it('should send email', () => {
      expect(sendEmailSpy).toHaveBeenCalledWith('Pepe', 'fakemail@google.com', '624216052');
    })

    it('should render successfull message', () => {
      expect(component.sendEmail).toBeTruthy();
    });
  });
});
