import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetpasswordModalPageRoutingModule } from './forgetpassword-modal-routing.module';

import { ForgetpasswordModalPage } from './forgetpassword-modal.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetpasswordModalPageRoutingModule,
    
  ],
  declarations: [ForgetpasswordModalPage]
})
export class ForgetpasswordModalPageModule {}
