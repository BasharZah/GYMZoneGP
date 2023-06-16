import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
 

import { Sport_InfoPage } from './sport_info.page';

describe('Sport_InfoPage', () => {
  let component: Sport_InfoPage;
  let fixture: ComponentFixture<Sport_InfoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sport_InfoPage, IonicModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Sport_InfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
