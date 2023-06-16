import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sport_InfoPage } from './sport_info.page';

const routes: Routes = [
  {
    path: '',
    component: Sport_InfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sport_InfoPageRoutingModule {}
