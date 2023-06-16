import { Component,  inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  //standalone: true,
  //imports: [IonicModule],
})
export class TabsPage {
 // public environmentInjector = inject(EnvironmentInjector);
 UserType:number = 1 ;
  constructor() {

    this.UserType = JSON.parse(sessionStorage.getItem('UserData')).UserType;

  }




}
