import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FirebaseService } from 'src/app/shared/Firebase.services';
//import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  //standalone: true,
  //imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page implements OnInit {
  firstName:any = '';
  lastName:any = '';
  email:any = '';
  phone:any = ''; 
  height:any = '';
  weight:any = '';
  birthDate:any = ''; 
  isHasSick:any = ''; 


  sportCenterName:any = '';
  city:any = '';
  otherFeattures:any = '';
  isHasStore:any = '';


  UserData = JSON.parse(sessionStorage.getItem("UserData"));
  UserType:number = 1;

  MySubscriptions:any [] = [];

   
 
  constructor(private firebaseService:FirebaseService ) {

   

  }
  ngOnInit(): void {
    let data = this.UserData;


    // Get references to the HTML elements
    this.UserType = data.UserType;
    if(data.UserType == 1){

      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.email = data.email;
      this.phone  = data.phone;
      this.height = data.height;
      this.weight  = data.weight;
      this.birthDate = data.birthDate;
      this.isHasSick  = data.isHasSick;

      this.firebaseService.getDataByCondations('subscription' , 'UserID' , '==' ,this.UserData.documentId).then(result => { 
  
        result.forEach((doc) => {      
          console.log('MySubscriptions:', doc.data()); // Print the query to the console
          this.MySubscriptions.push(doc.data());
         
        }); 
      }); 
    
     


    } else if(data.UserType == 2){

      this.sportCenterName = data.sportCenterName;
      this.city = data.city;
      this.email = data.email;
      this.phone  = data.phone;
      this.otherFeattures = data.otherFeattures;
      this.isHasStore  = data.isHasStore; 
      
    }



  }
}
