import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  AddSubscriptionComponent } from './add-subscription.component';

const routes: Routes = [
  {
    path: '',
    component: AddSubscriptionComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSubscriptionRoutingModule {}
