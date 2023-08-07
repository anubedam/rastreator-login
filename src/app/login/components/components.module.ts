import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormAndMessageComponent } from './login-form-and-message/login-form-and-message.component';
import { LoginInfoAreaComponent } from './login-info-area/login-info-area.component';
import { BaseModule } from 'src/app/base/base.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginSucessMessageComponent } from './login-sucess-message/login-sucess-message.component';

@NgModule({
  declarations: [
    LoginFormAndMessageComponent,
    LoginInfoAreaComponent,
    LoginSucessMessageComponent
  ],
  imports: [
    CommonModule,
    BaseModule,
    SharedModule
  ],
  exports: [
    LoginFormAndMessageComponent,
    LoginInfoAreaComponent,
    LoginSucessMessageComponent
  ]
})
export class ComponentsModule { }
