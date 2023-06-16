import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpSportCenterComponent } from './signup-sport-center.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpSportCenterComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpSportCenterRoutingModule {}
