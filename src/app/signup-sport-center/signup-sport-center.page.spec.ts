import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpSportCenterComponent } from './signup-sport-center.component';

describe('SignUpSportCenterComponent', () => {
  let component: SignUpSportCenterComponent;
  let fixture: ComponentFixture<SignUpSportCenterComponent>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignUpSportCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
