import { Injectable } from '@angular/core';

import { Client, SendEmailV3_1 } from 'node-mailjet';
import { environment } from 'src/environments/environment';
import { MailServiceResponse } from '../interfaces/mail-service-response.interface';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  mailjet = new Client({
    apiKey: environment.mailPublicApiKey,
    apiSecret: environment.mailPrivateApiKey
  });

  sendEmail(toName: string, toEmail: string, toPhone: string): Promise<MailServiceResponse> {
    const mailTemplate = `<h1>¡Hemos recibido su petición!</h1>
    <p>${toName},</p>
    <p>
      Nos pondremos en contacto contigo a través del correo <strong>${toEmail}</strong>, o del teléfono <strong>${toPhone}</strong>
    </p>
      
    <p>Gracias por confiar en Rastreator.com para tus negocios</p>`;

    // INFO: Not sending email to email destination for avoid RGPD problems
    const data: SendEmailV3_1.Body = {
      Messages: [
        {
          From: {
            Email: environment.fromEmail,
            Name: environment.fromName
          },
          To: [
            {
              Email: `${environment.hardcodedDestMail}`,
              Name: `${toName}`
            },
          ],
          Subject: 'Prueba técnica - Antonio Úbeda Montero',
          HTMLPart: mailTemplate,
        }
      ],
    };

    return this.callToMailjet(data);
  }

  async callToMailjet(data: SendEmailV3_1.Body): Promise<MailServiceResponse> {
     try {
        const response = await this.mailjet
          .post('send', { version: 'v3.1' })
          .request(data);
        return Promise.resolve({ status: response.response.status });

     } catch (err) {
        console.log('Se ha producido un error', err);
        return Promise.reject({ status: 500, response: err});
     }  
  }
}
