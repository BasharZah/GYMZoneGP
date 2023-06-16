import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { FirebaseService } from '../shared/Firebase.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss'],
})
export class CoachesComponent implements OnInit {

  fullName: string;
  experience: string;
  sportsType: string;
  birthDate: string;
  email: string;
  phone: string;



  ngOnInit() {

  }

  constructor(private formBuilder: FormBuilder, private router: Router, private Aut: AuthenticationService
    , private firebaseService: FirebaseService, private alertController: AlertController) {

  }

  async onSubmit(form: any) {


    if (form.valid) {
      let UserData = JSON.parse(sessionStorage.getItem("UserData"));
      let formData: any = {
        fullName: this.fullName,
        sportsType: this.sportsType,
        experience: this.experience,
        birthDate: this.birthDate,
        email: this.email,
        phone: this.phone,
        sport_center_id:UserData.documentId
      };

      this.addDataToCollection(form,formData);

    }


  }


  addDataToCollection(form,data) {
    const collectionName = 'coaches';


    this.firebaseService.addData(collectionName, data)
      .then(async (result) => {
        const alert = await this.alertController.create({
          header: 'Successfully',
          message: 'New coache added successfully.',
          buttons: ['OK']
        });
        await alert.present();
        form.reset();
      })
      .catch(async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Failed to add new coache.',
          buttons: ['OK']
        });
        await alert.present();
        form.reset();
      });
  }


}
