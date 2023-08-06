import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-login-info-area',
  templateUrl: './login-info-area.component.html',
  styleUrls: ['./login-info-area.component.scss']
})
export class LoginInfoAreaComponent implements OnInit {
  h1Text1 = 'Seguro de Salud Adeslas';
  h1Text2 = 'Desde 21,90€';
  h2Text = 'Presupuesto gratis';

  adeslasCoverages: SafeHtml[] = [];

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.fillAdeslasBenefits();
  }

  fillAdeslasBenefits(): void {
    const coverage1 = '<strong>Adeslas</strong> te ofrece un <strong>seguro médico completo y personalizado</strong>.';
    const coverage2 =  'En <strong>Adeslas</strong> disponemos de <strong>servicios pensados en nuestros clientes</strong> para que su relación con nosotros sea más fácil, ágil y eficaz.';

    this.adeslasCoverages = [
      this.sanitizeText(coverage1),
      this.sanitizeText(coverage2)
    ];
  }

  sanitizeText(text: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(text);
  }
}
