import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [
    HeaderMenuComponent,
    FooterLinksComponent
  ],
  imports: [
    CommonModule,
    BaseModule
  ],
  exports: [
    HeaderMenuComponent,
    FooterLinksComponent
  ]
})
export class SharedModule { }
