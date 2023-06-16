import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationsPage } from './Registrations.page';

 

const routes: Routes = [
  {
    path: '',
    component: RegistrationsPage,
    children: [
      {
        path: 'addUser',
        loadChildren: () => import('../signup-user/signup-user.module').then(m => m.SignUpUserPageModule)
      },{
        path: 'addSportCenter',
        loadChildren: () => import('../signup-sport-center/signup-sport-center.module').then(m => m.SignUpSportCenterPageModule)
      } 
      // Define other tab routes here
    ]
  } 
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationsRoutingModule {}
