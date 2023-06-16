 
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationsRoutingModule } from './Registrations.routes';
import { RegistrationsPage } from './Registrations.page';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationsRoutingModule,
 

  ],
  declarations: [RegistrationsPage]
})
export class RegistrationsPageModule { }

