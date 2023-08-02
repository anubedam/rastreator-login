import { Component } from '@angular/core';
import { ContactData } from '../interfaces/contact-data.interface';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  contactData: ContactData;

  constructor() {
    this.contactData = {
      businessName: 'by Rastreator',
      phone: '900 000 000',
      schedule: 'L-V de 9:00 a 18:45'
    };
  }
}
