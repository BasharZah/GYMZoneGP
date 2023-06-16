import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { FirebaseService } from '../shared/Firebase.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup-sport-center',
  templateUrl: './signup-sport-center.page.html',
  styleUrls: ['./signup-sport-center.page.scss'],
})
export class SignUpSportCenterComponent implements OnInit {


  sportCenterName: string;
  city: string; 
  otherFeattures: string;
  isHasStore: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;

  jordanCities: string[] = [
    "Amman",
    "Zarqa",
    "Irbid",
    "Ajloun",
    "Jerash",
    "Madaba",
    "Karak",
    "Tafilah",
    "Ma'an",
    "Aqaba",
    "Mafraq",
    "Salt",
    "Ramtha",
    "Sahab",
    "Russeifa",
    "Wadi Musa (Petra)",
    "Tafileh",
    "Al-Karak",
    "Deir Alla",
    "Al Husn"
    // Add more cities here, if needed
  ];
 
 

  ngOnInit() {

  }

  constructor(private formBuilder: FormBuilder, private router: Router, private Aut: AuthenticationService
    , private firebaseService: FirebaseService , private alertController:AlertController) {

  }



  showPassword = false;
  passwordToggleIcon = 'eye';
  //registrationForm: FormGroup;

  passwordForm: FormGroup;
  togglePassword(): void {

    this.showPassword = !this.showPassword

    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off'

    }

    else {
      this.passwordToggleIcon = 'eye'
    }
  }

  async onSubmit(form: any) {


    if (form.valid) {

      if (this.password !== this.confirmPassword) {
        // Password and confirm password do not match
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Password and confirm password do not match.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      }
 
    
      let formData:any = { 
        sportCenterName: this.sportCenterName,
        city: this.city,
        otherFeattures: this.otherFeattures || '--',
        isHasStore: this.isHasStore || '--', 
        email: this.email,
        phone: this.phone,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
     
      this.Aut.registerUser(this.email,this.password).then(data =>{
          console.log(data.user.uid);
        formData.uid  = data.user.uid;
        console.log(formData);
        this.addDataToCollection(formData);
        // Reset the form
        form.reset();
      }).catch(async error => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'This email is exists.',
          buttons: ['OK']
        });
        await alert.present();
      })




    
    }

    
  }


  
  addDataToCollection(data) {
    const collectionName = 'sport_centers';
    

    this.firebaseService.addData(collectionName, data)
      .then(async (result) => {
        const alert = await this.alertController.create({
          header: 'Successfully',
          message: 'Data added successfully!',
          buttons: ['OK']
        });
        await alert.present();

      
        this.router.navigate(['/login'], { replaceUrl: false });

      })
      .catch(async (error) => {
        const alert = await this.alertController.create({
          header: 'Successfully',
          message: 'Error adding data!',
          buttons: ['OK']
        });
        await alert.present();
      });
  }


  Login() {
    this.router.navigate(['/login'], { replaceUrl: false });

  }

}
