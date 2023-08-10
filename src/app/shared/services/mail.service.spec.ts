import { TestBed } from '@angular/core/testing';

import { MailService } from './mail.service';

describe('MailService', () => {
  let service: MailService;
  let callToMailjetSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailService);
    callToMailjetSpy = spyOn(service, 'callToMailjet');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('email was sent successfully', (done) => {
    const mailResponse = Promise.resolve({ status: 200 });
    callToMailjetSpy.and.returnValue(Promise.resolve(mailResponse));
    const toName = 'pepe';
    const toEmail = 'fakeMail@gmail.com';
    const toPhone = '645216037';
    service.sendEmail(toName, toEmail, toPhone)
      .then(
         resp => {
          expect(callToMailjetSpy).toHaveBeenCalled();
          done();
         }
      );
  });

  it('email not was sent successfully (there was an error)', (done) => {
    const mailResponse = Promise.resolve({ status: 500, message: 'Server error' });
    callToMailjetSpy.and.returnValue(Promise.reject(mailResponse));
    const toName = 'pepe';
    const toEmail = 'fakeMail@gmail.com';
    const toPhone = '645216037'; 
    service.sendEmail(toName, toEmail, toPhone)
      .catch(
         err => {
          expect(callToMailjetSpy).toHaveBeenCalled();
          done();
         }
      );
  });
});
