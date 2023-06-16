import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { FirebaseService } from '../shared/Firebase.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss'],
})
export class AddSubscriptionComponent implements OnInit {
 
  subscriptionName: string;  
  sportsType: string;  
  numberSubscriptionDays: string;  
  freeDays: string;  
  ages: string;
  price: string; 
  coache: string;
  description: string;
  coaches:any[] = [];;
  listages:any [] = ['< 15',' 15 - 18',' > 18'] 
  UserData = JSON.parse(sessionStorage.getItem("UserData"));

  ngOnInit() {


    this.firebaseService.getDataByCondations('coaches' , 'sport_center_id' , '==' ,this.UserData.documentId
    ).then(result => { 

      result.forEach((doc) => {      
        console.log('coaches:', doc.data()); // Print the query to the console

        this.coaches.push(doc.data());
      }); 
    }); 

  }

  constructor(private formBuilder: FormBuilder, private router: Router, private Aut: AuthenticationService
    , private firebaseService: FirebaseService, private alertController: AlertController) {

  }

  async onSubmit(form: any) {


    if (form.valid) {
     
      let formData: any = {
        subscriptionName: this.subscriptionName,
        sportsType: this.sportsType,
        numberSubscriptionDays: this.numberSubscriptionDays,
        freeDays: this.freeDays,
        ages: this.ages,
        price: this.price,
        coache: this.coache,
        description: this.description || "",        
        sport_center_id:this.UserData.documentId
      };

      this.addDataToCollection(form,formData);

    }


  }


  addDataToCollection(form,data) {
    const collectionName = 'sport_centers_subscription';


    this.firebaseService.addData(collectionName, data)
      .then(async (result) => {
        const alert = await this.alertController.create({
          header: 'Successfully',
          message: 'New subscription has been added successfully.',
          buttons: ['OK']
        });
        await alert.present();
        form.reset();
      })
      .catch(async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Failed to add new subscription.',
          buttons: ['OK']
        });
        await alert.present();
        form.reset();
      });
  }


}
