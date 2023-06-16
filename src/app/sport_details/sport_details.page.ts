import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { FirebaseService } from '../shared/Firebase.services';
import { AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-Sport_Details',
  templateUrl: 'Sport_Details.page.html',
  styleUrls: ['Sport_Details.page.scss'], 
})
export class Sport_DetailsPage implements OnInit {

  selected_sport_center = {
    description : "",
    sportCenterName:"",
    email : "",
    phone:"",
    MainImage:"",
    Image1:"",
    Image2:"",
    Image3:"",
    Image4:""

  }

  constructor(private route: ActivatedRoute
    , private firebaseService: FirebaseService, private alertController: AlertController) {



  }
  ngOnInit(): void {
  
      this.route.queryParams.subscribe(params => {
        const id = params['id'];
   

        this.firebaseService.getData('sport_centers').subscribe(result => { 
          result.forEach((doc) => {      
    
              let Obj = doc.data() ; 
              Obj.documentId = doc.id; 
               if(Obj.documentId == id){

              this.selected_sport_center.sportCenterName = Obj.sportCenterName;
              this.selected_sport_center.description = Obj.description;

              this.selected_sport_center.email = Obj.email;
              this.selected_sport_center.phone = Obj.phone;
             

              if(Obj.MainImage != undefined){
              this.firebaseService.readFile(  Obj.MainImage ).subscribe((url) => {
                // Use the URL to display or process the image
                this.selected_sport_center.MainImage =  url;               
              }); 
              } else {
                this.selected_sport_center.MainImage = 'assets/home.png'; 
              }

              if(Obj.Image1 != undefined){
              this.firebaseService.readFile(  Obj.Image1 ).subscribe((url) => {
                // Use the URL to display or process the image
                this.selected_sport_center.Image1 =  url;               
              }); 

              } else {
                this.selected_sport_center.Image1 = 'assets/not-found.jpg'; 
              }

              if(Obj.Image2 != undefined){
              this.firebaseService.readFile(  Obj.Image2 ).subscribe((url) => {
                // Use the URL to display or process the image
                this.selected_sport_center.Image2 =  url;               
              }); 
            } else {
              this.selected_sport_center.Image2 = 'assets/not-found.jpg'; 
            }

            if(Obj.Image3 != undefined){
              this.firebaseService.readFile(  Obj.Image3 ).subscribe((url) => {
                // Use the URL to display or process the image
                this.selected_sport_center.Image3 =  url;               
              }); 
            } else {
              this.selected_sport_center.Image3 = 'assets/not-found.jpg'; 
            }

            if(Obj.Image4 != undefined){
              this.firebaseService.readFile(  Obj.Image4 ).subscribe((url) => {
                // Use the URL to display or process the image
                this.selected_sport_center.Image4 =  url;               
              }); 
            } else {
              this.selected_sport_center.Image4 = 'assets/not-found.jpg'; 
            }
          }
          }); 
        }); 


      });

  }
 
}
