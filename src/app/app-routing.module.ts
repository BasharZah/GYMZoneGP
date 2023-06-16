import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },{
    path: 'registrations',
    loadChildren: () => import('./Registrations/Registrations.module').then(m => m.RegistrationsPageModule)
  },{
    path: 'coaches',
    loadChildren: () => import('./coaches/coaches.module').then(m => m.CoachesPageModule)
  },{
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  },{
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },{
    path: 'sport_details',
    loadChildren: () => import('./sport_details/sport_details.module').then(m => m.Sport_DetailsModalPageModule)
  },{
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
