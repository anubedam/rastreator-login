import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinksComponent } from './footer-links.component';
import { BaseModule } from 'src/app/base/base.module';

describe('FooterLinksComponent', () => {
  let component: FooterLinksComponent;
  let fixture: ComponentFixture<FooterLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterLinksComponent],
      imports: [BaseModule]
    });
    fixture = TestBed.createComponent(FooterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
