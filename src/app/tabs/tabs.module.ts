 
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs.routes';
import { TabsPage } from './tabs.page';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
 

  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }

