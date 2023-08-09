import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginErrors } from 'src/app/shared/interfaces/login-error.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const MAX_LENGTH_NAME = 2;

@Component({
  selector: 'app-login-form-and-message',
  templateUrl: './login-form-and-message.component.html',
  styleUrls: ['./login-form-and-message.component.scss']
})
export class LoginFormAndMessageComponent implements OnInit {
  formTitle = '¡Te llamamos gratis!';
  emailSent = false;

  nameLabelField = 'Nombre';
  phoneLabelField = 'Teléfono';
  emailLabelField = 'Email';
  dniLabelField = 'Dni';

  contactLabel = 'Franja horaria';

  morningContactLabel = 'Mañana';
  afternoonContactLabel = 'tarde';

  adviceText!: SafeHtml;

  sendButtonText = 'Enviar';

  errorMessages!: LoginErrors;

  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private domSanitizer: DomSanitizer) {
    this.formLogin = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(MAX_LENGTH_NAME)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required]],
      contact: ['M', [Validators.required]],
      accept: [false, [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {
    this.getErrorMessagesDomains();
    const policyText = 'He leído y acepto el <a href=”https://www.rastreator.com/aviso-legal.aspx” target=”_blank”>Aviso Legal</a> y la <a href=”https://www.rastreator.com/politica-de-privacidad.aspx” target=”_blank”>Política de Privacidad</a>';
    this.adviceText = this.domSanitizer.bypassSecurityTrustHtml(policyText);   
  }
  
  sendForm(): void {
    if (this.formLogin.invalid) {
      // If form has erros don't let send email
      this.formLogin.markAllAsTouched();
      return;
    }

    this.sendEmail();
  }
  
  sendEmail(): void {
    const emailData = this.formLogin.value;
    console.log('¡Email was sent!', emailData);
    
    // Render success mesage
    this.emailSent = true;   
  }

  getErrorMessagesDomains(): void {
    this.errorMessages = {
      name: {
        required: 'Nombre obligatorio',
        minlength: `Nínimo ${MAX_LENGTH_NAME} caracteres`
      },
      phone: {
        required: 'Telefono obligatorio',
      },
      email: {
        required: 'Email obligatorio',
        email: 'Email inválido'
      },
      dni: {
        required: 'DNI obligatorio',
      },
      accept: {
        required: 'Debe aceptar las condiciones'
      }
    };
  }

  hasErrors(fieldName: string): boolean {
    const field = this.formLogin.get(fieldName);
    return !!field && field.touched && !!field.errors;  
  }

  getErrors(fieldName: string): string[] {
    const field = this.formLogin.get(fieldName) as FormControl;
    return this.mapErrorsToDescription(fieldName, field);
  }

  mapErrorsToDescription(fieldName: string, field: FormControl): string [] {
    const fieldErrors = field.errors;

    if (!fieldErrors) {
      return [];
    }
    
    return Object.keys(fieldErrors).map((errorName: string) => {
      return this.errorMessages[fieldName][errorName];
    });
  }
}
