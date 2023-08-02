import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuComponent } from './header-menu.component';
import { BaseModule } from 'src/app/base/base.module';

describe('HeaderMenuComponent', () => {
  let component: HeaderMenuComponent;
  let fixture: ComponentFixture<HeaderMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMenuComponent],
      imports: [BaseModule]
    });
    fixture = TestBed.createComponent(HeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have business name, phone number and contact data', () => {
    expect(component.contactData.businessName).toBeTruthy();
    expect(component.contactData.phone).toBeTruthy();
    expect(component.contactData.schedule).toBeTruthy();
  });
});
