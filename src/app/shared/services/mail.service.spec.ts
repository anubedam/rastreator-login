import { TestBed } from '@angular/core/testing';

import { MailService } from './mail.service';

fdescribe('MailService', () => {
  let service: MailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve http status 200 when email is sent', (done) => {
    const callToMailjetSpy = spyOn(service, 'callToMailjet').and.returnValue(Promise.resolve(200));

    service.sendEmail().then(resp => {
      expect(resp).toBe(200);
      done();
    });
  });

  it('should retrieve an error when email has any sending error', (done) => {
    const callToMailjetSpy = spyOn(service, 'callToMailjet').and.returnValue(Promise.reject('there was an error'));

    service.sendEmail().catch(err => {
      expect(err).toBe('there was an error');
      done();
    });
  });
});
