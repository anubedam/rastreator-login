import { Component, OnInit } from '@angular/core';
import { FooterLegalOptions } from '../interfaces/footer-legal-options.interface';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss']
})
export class FooterLinksComponent implements OnInit{
  legalOptions: FooterLegalOptions[] = [];
  adviceText: string = '';

  ngOnInit(): void {
    this.legalOptions = [
      { text: 'Aviso Legal', url: 'https://www.rastreator.com/aviso-legal.aspx' },
      { text: 'Política de Cookies', url: 'https://www.rastreator.com/politica-de-cookies.aspx' },
      { text: 'Política de Privacidad', url: 'https://www.rastreator.com/politica-de-privacidad.aspx' }
    ];
    this.adviceText = 'Recuerda revisar la información básica de privacidad'
  }
}
