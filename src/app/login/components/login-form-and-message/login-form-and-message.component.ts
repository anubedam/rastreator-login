import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-and-message',
  templateUrl: './login-form-and-message.component.html',
  styleUrls: ['./login-form-and-message.component.scss']
})
export class LoginFormAndMessageComponent {
  formTitle = '¡Te llamamos gratis!';
  emailSent = false;

  nameLabelField = 'Nombre';
  phoneLabelField = 'Teléfono';
  emailLabelField = 'Email';
  dniLabelField = 'Dni';

  contactLabel = 'Franja horaria';

  morningContactLabel = 'Mañana';
  afternoonContactLabel = 'tarde';

  adviceText = 'He leído y acepto el <a>Aviso Legal</a> y la <a>Política de Privacidad</a>';

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      accept: [false, [Validators.requiredTrue]]
    });
  }
  
  sendForm(): void {
    if (this.loginForm.invalid) {
      // If form has erros don't let send email
      this.loginForm.markAllAsTouched();
      return;
    }

    this.sendEmail();
  }

  sendEmail(): void {
    console.log('¡Email was sent!');
  }
}
