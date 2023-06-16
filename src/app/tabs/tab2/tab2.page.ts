import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { FirebaseService } from 'src/app/shared/Firebase.services';
import { AuthenticationService } from 'src/app/shared/authentication.service';
//import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { GetURLformPipe } from '../../pipe/GetURL-transform.pipe';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  //standalone: true,
  //imports: [IonicModule, ExploreContainerComponent],
})
export class Tab2Page implements OnInit {
  sport_center: any[]  = [];

  constructor(private router:Router , private Aut:AuthenticationService 
    , private firebaseService:FirebaseService , private alertController:AlertController) {}


  ngOnInit(): void {

    this.firebaseService.getData('sport_centers').subscribe(result => { 
      result.forEach((doc) => {      

          let Obj = doc.data() ; 
          Obj.documentId = doc.id; 


        if(Obj.MainImage != undefined){

          this.firebaseService.readFile(  Obj.MainImage ).subscribe((url) => {
            // Use the URL to display or process the image
            Obj.MainImage = url;
            this.sport_center.push(Obj); 
          }); 
        } else {
          Obj.MainImage = 'assets/home.png';
          this.sport_center.push(Obj); 
        }

      }); 
    }); 
   
  }

  GoToFullInformation(data:any){
   

    const navigationExtras: NavigationExtras = {
      queryParams: { id: data.documentId }
    };

    this.router.navigate(['/menu/sport_details'] , navigationExtras);
  }

}
