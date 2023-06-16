
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { NavController, Platform } from '@ionic/angular';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

  userName: any = 'Amir Al Jabri';
  
  acessLevel: any;

  password: String = "";
  currentLang: any;
 
  pages: any = []; 
  MenuDir: any;
  MenuSide: any = "start";
  constructor(public navCtrl: NavController, private router: Router , private statusBar: StatusBar,
    private platform: Platform , private activatedRoute: ActivatedRoute) {

    let data = JSON.parse(sessionStorage.getItem('UserData'));


    this.pages = [{
      title: 'Home',
      icon: 'home',
      url: '/menu/tabs/tab1' 
    }
      
    ];

    if(data.UserType ==1){ // Users

      this.userName = data.fullName;

      this.pages.push({
        title: 'Subscription',
        icon: 'duplicate',
        url: '/menu/subscription' 
      });
    } else if(data.UserType ==2){ // Sport Ceneter

      this.userName = data.sportCenterName;
      this.pages.push({
        title: 'Sport Information',
        icon: 'create-outline',
        url: '/menu/sport_info' 
      },{
        title: 'Add Subscriptions',
        icon: 'add-circle',
        url: '/menu/add-subscription' 
      },{
        title: 'Coaches',
        icon: 'people',
        url: '/menu/coaches' 
      });
    } 


    

    this.pages.push({
      title: 'Change Password',
      icon: 'lock-closed-outline',
      url: '/menu/change-password'
    },  {
      title: 'About',
      icon: 'ribbon-outline',
      url: '/menu/about'
    });

    this.router.navigate(["menu/tabs/tab1"]);


  }
  ngOnInit() {

  }

  logout(){
    this.router.navigate(['/login'], { replaceUrl: true });
  }
 

}


