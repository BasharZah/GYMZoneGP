import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import{FirebaseService } from '../shared/Firebase.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  @ViewChild("email", { static: true }) emailInput: Input;
  @ViewChild("password", { static: false }) passwordInput: Input;
 
  email: any = "";
  password: any = "";
  errorMessage:any = "";
 
 

  constructor(private router:Router , private Aut:AuthenticationService 
    , private firebaseService:FirebaseService , private alert:AlertController) { }

  ngOnInit() {
  }


  async Login() {

      sessionStorage.clear();
     this.errorMessage = '';
    // Perform validation
    if (!this.email.trim() || !this.password.trim()) {
      //document.getElementById("email").focus()
      this.errorMessage = 'Please enter both email and password.';
    } else {
      // Redirect to home page or perform other actions
      // For demo purposes, let's just show an alert
       
      await this.Aut.signIn(this.email.trim(),this.password.trim()).then(async data => {
       

       await this.firebaseService.getData('users').toPromise().then(async result => {
          result.forEach((doc) => {
            //console.log(doc.data())
            let data:any = doc.data();
            data.documentId = doc.id;
            data.UserType = 1; // User

            if(data.email.toUpperCase() == this.email.trim().toUpperCase() &&  data.password == this.password.trim()){
              sessionStorage.setItem('UserData' , JSON.stringify(data));
              this.router.navigate(['/menu'], { replaceUrl: false });
            }

          });

          if(sessionStorage.getItem('UserData') == null){
            await this.firebaseService.getData('sport_centers').toPromise().then(result => {
              result.forEach((doc) => {
                console.log(doc.data())        
                let data:any = doc.data();
                data.documentId = doc.id;
                data.UserType = 2; // Sport Center
                
                if(data.email.toUpperCase() == this.email.trim().toUpperCase() &&  data.password == this.password.trim()){
                  sessionStorage.setItem('UserData' , JSON.stringify(data));
                  this.router.navigate(['/menu'], { replaceUrl: false });
                }
    
              });
    
            }); 
         }

        }); 

       


 
      }).catch(error => {
        this.errorMessage = 'The email and password are invalid.';
      })

      
 
      

    }
  }

  /*
    if (code == 13 && NumberInput == 1 && this.userName.trim() == "") {
      document.getElementById("userName").focus()
      alert("Please enter both username and password.")
    } else if (code == 13 && NumberInput == 1 && this.userName.trim() != "") {
      document.getElementById("password").focus()
    } else if (code == 13 && NumberInput == 1 && this.password.trim() == "") {
      document.getElementById("password").focus()
      //this.common.AlertMessage(this.translate.instant("msgalert.msg_enter_password"))
    } else {
      this.Login();
    }
  }*/

  


  signup(){
    this.router.navigate(['/registrations/addUser'], { replaceUrl: false });
  }

}
