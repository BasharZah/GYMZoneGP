 
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {SignUpUserRoutingModule } from './signup-user-routing.module';
import { SignUpUserComponent } from './signup-user.component';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpUserRoutingModule,
 

  ],
  declarations: [SignUpUserComponent]
})
export class SignUpUserPageModule { }

