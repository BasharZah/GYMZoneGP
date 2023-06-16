import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: MenuPage,
  children: [ 
    { 
      path: 'tabs',
      loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
    }, {
      path: 'sport_info',
      loadChildren: () => import('../sport_info/sport_info.module').then(m => m.Sport_InfoModalPageModule)
    }, {
      path: 'sport_details',
    loadChildren: () => import('../sport_details/sport_details.module').then(m => m.Sport_DetailsModalPageModule)
},{
  path: 'add-subscription',
  loadChildren: () => import('../add-subscription/add-subscription.module').then(m => m.AddSubscriptionPageModule)
},{
      path: 'subscription',
      loadChildren: () => import('../subscription/subscription.module').then(m => m.SubscriptionModalPageModule)
    }, {
      path: 'coaches',
      loadChildren: () => import('../coaches/coaches.module').then(m => m.CoachesPageModule)
    }, {
      path: 'change-password',
      loadChildren: () => import('../change-password/change-password.module').then(m => m.ChangePasswordPageModule)
    }, {
      path: 'about',
      loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
    },
  ] 

}];





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
