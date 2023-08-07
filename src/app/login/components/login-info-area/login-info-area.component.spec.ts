import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfoAreaComponent } from './login-info-area.component';
import { BaseModule } from 'src/app/base/base.module';

describe('LoginInfoAreaComponent', () => {
  let component: LoginInfoAreaComponent;
  let fixture: ComponentFixture<LoginInfoAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginInfoAreaComponent],
      imports: [BaseModule]
    });
    fixture = TestBed.createComponent(LoginInfoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
