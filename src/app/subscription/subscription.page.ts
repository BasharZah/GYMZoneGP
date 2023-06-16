import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthenticationService } from '../shared/authentication.service';
import { FirebaseService } from '../shared/Firebase.services'; 
import { AlertController } from '@ionic/angular'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-subscription',
  templateUrl: 'subscription.page.html',
  styleUrls: ['subscription.page.scss'],
  //standalone: true,
  //imports: [IonicModule, ExploreContainerComponent],
})
export class SubscriptionPage implements OnInit {


  sport_center: any[]  = [];
  coaches: any[]  = []; 
  listages:any [] = ['< 15',' 15 - 18',' > 18'] 
  sport_centers_subscription: any[]  = []; 

 
  sportCenterName:any = '';
  subscriptionName: any;  
  electronicPaymentNumber:any = ''; 
  
  sportsType: any;  
  numberSubscriptionDays: any;  
  freeDays: any;  
  ages: any;
  price: any; 
  coache: any;
  description: any;

  UserData = JSON.parse(sessionStorage.getItem("UserData"));
 

    
  constructor(private router:Router , private Aut:AuthenticationService 
    , private firebaseService:FirebaseService , private alertController:AlertController) {

   

  }
  ngOnInit(): void {


      this.firebaseService.getData('sport_centers').subscribe(result => { 
        result.forEach((doc) => {      

          let Obj = doc.data() ; 
          Obj.documentId = doc.id; 
          this.sport_center.push(Obj);
        }); 
      }); 

      


    let data = JSON.parse(sessionStorage.getItem('UserData'));
 
  }



  async getCoacheBySportCeneterID(event:any){

  
    await this.firebaseService.getDataByCondations('coaches' , 'sport_center_id' , '==' ,
    event.detail.value.documentId).then(result => { 

      result.forEach((doc) => {      
        console.log('coaches:', doc.data()); // Print the query to the console

        this.coaches.push(doc.data());
      }); 
    }); 


    this.firebaseService.getDataByCondations('sport_centers_subscription' , 'sport_center_id' , '==' ,
    event.detail.value.documentId).then(result => { 

      result.forEach((doc) => {      
        console.log('sport_centers_subscription:', doc.data()); // Print the query to the console
        this.sport_centers_subscription.push(doc.data());
       
      }); 
    }); 

  }


  FillSubscriptionDetails(event:any){
    
    let selectedSubscription:any = event.detail.value;

    console.log("selectedSubscription",selectedSubscription);
    this.sportsType = selectedSubscription.sportsType ; 
    this.numberSubscriptionDays = selectedSubscription.numberSubscriptionDays ; 
    this.freeDays = selectedSubscription.freeDays ; 
    this.ages = selectedSubscription.ages ; 
    this.price = selectedSubscription.price ; 
    this.coache = selectedSubscription.coache ; 
    this.description = selectedSubscription.description ; 
   

  }

  onSubmit(form:any){


    if (form.valid) {

      let UserData = JSON.parse(sessionStorage.getItem("UserData"));
      let formData: any = {
        sport_center_name: this.sportCenterName.sportCenterName, 
        subscriptionName:this.subscriptionName.subscriptionName,
        payment_number: this.electronicPaymentNumber,
        sportsType:this.sportsType,
        numberSubscriptionDays:this.numberSubscriptionDays,
        freeDays:this.freeDays,
        ages:this.ages,
        coache:this.coache,
        description:this.description,  
        UserID:UserData.documentId
      };

      this.addDataToCollection(form,formData);

    }
 


  }


  addDataToCollection(form,data) {
    const collectionName = 'subscription';
    

    this.firebaseService.addData(collectionName, data)
    .then(async (result) => {
      const alert = await this.alertController.create({
        header: 'Successfully',
        message: 'New subscription added successfully.',
        buttons: ['OK']
      });
      await alert.present();
      form.reset()
    })
    .catch(async (error) => {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Failed to add new subscription.',
        buttons: ['OK']
      });
      await alert.present();
      form.reset()
    });
}

}
