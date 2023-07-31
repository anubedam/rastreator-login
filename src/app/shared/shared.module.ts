import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';

@NgModule({
  declarations: [
    HeaderMenuComponent,
    FooterLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderMenuComponent,
    FooterLinksComponent
  ]
})
export class SharedModule { }
