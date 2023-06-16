import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sport_DetailsPageRoutingModule } from './sport_details-routing.module';

import { Sport_DetailsPage } from './sport_details.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sport_DetailsPageRoutingModule,
    
  ],
  declarations: [Sport_DetailsPage]
})
export class Sport_DetailsModalPageModule {}
