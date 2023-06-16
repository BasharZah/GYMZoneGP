import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
 

import { Sport_DetailsPage } from './sport_details.page';

describe('Sport_DetailsPage', () => {
  let component: Sport_DetailsPage;
  let fixture: ComponentFixture<Sport_DetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sport_DetailsPage, IonicModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Sport_DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
