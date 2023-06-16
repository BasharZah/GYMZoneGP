 
import { Component,  ContentChild ,ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../shared/Firebase.services';
import { AuthenticationService } from '../shared/authentication.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss']
})
export class ChangePasswordPage implements OnInit {
 
  confirmPassword:string = '' ; 
  newPassword:string = ''; 
  cuurentPassword:string = '' ; 
   
  showPassword = false; 
  passwordToggleIcon='eye';

 
  constructor(private formBuilder: FormBuilder, private Aut:AuthenticationService 
    , private firebaseService:FirebaseService , private alertController:AlertController) {
    
  }
  ngOnInit(): void {
    
  }

 
  async onSubmit(form) {



    console.log(form.valid);
    if (form.valid) {

      if (this.cuurentPassword == this.newPassword) {
         const alert = await this.alertController.create({
          header: 'Error',
          message: 'Current password and new password are match.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      
    } else if (this.newPassword !== this.confirmPassword) {
        // Password and confirm password do not match
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'New password and confirm password do not match.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      } else {

      this.Aut.updatePassword(this.newPassword)
      .then(async () => {


        let data = JSON.parse(sessionStorage.getItem('UserData'));
        data.password = this.newPassword;
        data.confirmPassword = this.newPassword;
        const collectionPath = 'users';
       
        this.firebaseService.updateDocument(collectionPath, data.documentId, data)
          .then(async() => {
            const alert = await this.alertController.create({
              header: 'Successfully',
              message: 'The change password successfully.',
              buttons: ['OK']
            });
            await alert.present();
            this.Aut.signOut();
          })
          .catch((error) => {
            console.error('Error updating document:', error);
          });

        
      })
      .catch(async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Faild to update password.',
          buttons: ['OK']
        });
        await alert.present();
      }); 

    }
 
    }
     

  }
 

  togglePassword():void {

    this.showPassword=!this.showPassword
     
     if(this.passwordToggleIcon=='eye'){
      this.passwordToggleIcon='eye-off'

     } else {
     this.passwordToggleIcon='eye'}
  }
  

 
 


  

}
