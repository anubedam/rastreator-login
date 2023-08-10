import { Component, OnInit } from '@angular/core';
import { MailService } from './shared/services/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rastreator-login';

  constructor() {}

  ngOnInit(): void {}
}
