 
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSubscriptionRoutingModule } from './add-subscription-routing.module';
import { AddSubscriptionComponent } from './add-subscription.component';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSubscriptionRoutingModule,
 

  ],
  declarations: [AddSubscriptionComponent]
})
export class AddSubscriptionPageModule { }

