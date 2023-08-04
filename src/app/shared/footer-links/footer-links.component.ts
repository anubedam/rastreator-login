import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss']
})
export class FooterLinksComponent implements OnInit{
  legalOptions: string[] = [];
  adviceText: string = '';

  ngOnInit(): void {
    this.legalOptions = [
      'Aviso Legal',
      'Política de Cookies',
      'Política de Privacidad'
    ];
    this.adviceText = 'Recuerda revisar la información básica de privacidad'
  }
}
