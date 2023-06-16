import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sport_DetailsPage } from './sport_details.page';

const routes: Routes = [
  {
    path: '',
    component: Sport_DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sport_DetailsPageRoutingModule {}
