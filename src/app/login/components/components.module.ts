import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormAndMessageComponent } from './login-form-and-message/login-form-and-message.component';
import { LoginInfoAreaComponent } from './login-info-area/login-info-area.component';

@NgModule({
  declarations: [
    LoginFormAndMessageComponent,
    LoginInfoAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginFormAndMessageComponent,
    LoginInfoAreaComponent
  ]
})
export class ComponentsModule { }
