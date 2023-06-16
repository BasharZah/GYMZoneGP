import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { RegistrationsPage } from './Registrations.page';

describe('RegistrationsPage', () => {
  let component: RegistrationsPage;
  let fixture: ComponentFixture<RegistrationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationsPage, IonicModule],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
