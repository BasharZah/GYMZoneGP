import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sport_InfoPageRoutingModule } from './sport_info-routing.module';

import { Sport_InfoPage } from './sport_info.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sport_InfoPageRoutingModule,
    
  ],
  declarations: [Sport_InfoPage]
})
export class Sport_InfoModalPageModule {}
