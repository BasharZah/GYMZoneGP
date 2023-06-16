import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

 

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1ModalPageModule)
      },{
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2ModalPageModule)
      },{
        path: 'tab3',
        loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3ModalPageModule)
      },
      // Define other tab routes here
    ]
  } 
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
