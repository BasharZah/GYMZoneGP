 
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachesRoutingModule } from './coaches-routing.module';
import { CoachesComponent } from './coaches.component';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachesRoutingModule,
 

  ],
  declarations: [CoachesComponent]
})
export class CoachesPageModule { }

