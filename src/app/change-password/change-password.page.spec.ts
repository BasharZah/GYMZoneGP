import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangePasswordPage } from './change-password.page';

describe('LoginPage', () => {
  let component: ChangePasswordPage;
  let fixture: ComponentFixture<ChangePasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
