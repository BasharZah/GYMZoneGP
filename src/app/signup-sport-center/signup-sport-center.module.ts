 
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpSportCenterRoutingModule } from './signup-sport-center-routing.module';
import { SignUpSportCenterComponent } from './signup-sport-center.component';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpSportCenterRoutingModule,
 

  ],
  declarations: [SignUpSportCenterComponent]
})
export class SignUpSportCenterPageModule { }

