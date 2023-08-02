import { Injectable } from '@angular/core';

import { Client, SendEmailV3_1, LibraryResponse } from 'node-mailjet';
import { RequestData } from 'node-mailjet/declarations/request/Request';

const API_KEY_PUBLIC = 'ef2b1c7310a5a4a97f9690236809af21';
const API_KEY_PRIVATE = '4cbc440d8d97eccf8da73353e8d8228a';

export const mailjet = new Client({
  apiKey: API_KEY_PUBLIC,
  apiSecret: API_KEY_PRIVATE
});

@Injectable({
  providedIn: 'root'
})
export class MailService {
  sendEmail(): Promise<any> {

    const data: SendEmailV3_1.Body = {
      Messages: [
        {
          From: {
            Email: 'anubedam@gmail.com',
            Name: 'Sender name'
          },
          To: [
            {
              Email: 'anubedam@gmail.com',
              Name: 'Destination email'
            },
          ],
          Subject: 'Antonio Úbeda Montero Tech Proof',
          HTMLPart: '<h1>Email was sent successfully!</h1><br/>We can continue with job offer :)',
        }
      ],
    };

    return this.callToMailjet(data);
  }

  async callToMailjet(data: SendEmailV3_1.Body): Promise<any> {
     try {
        const response = await mailjet
          .post('send', { version: 'v3.1' })
          .request(data);
        return response.response.status;

     } catch (err) {
        console.log('Se ha producido un error', err);
        return err;
     }  
  }
}
