import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordPage } from './change-password.page';

 
@NgModule({
  imports: [ 
    ReactiveFormsModule ,
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePasswordRoutingModule,
 

  ],
  declarations: [ChangePasswordPage]
})
export class ChangePasswordPageModule { }

