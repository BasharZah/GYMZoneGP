import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { FirebaseService } from '../shared/Firebase.services';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sport_info',
  templateUrl: 'sport_info.page.html',
  styleUrls: ['sport_info.page.scss'],
  //standalone: true,
  //imports: [IonicModule, ExploreContainerComponent],
})
export class Sport_InfoPage implements OnInit {



  MainImage: any;
  Image1: any;
  Image2: any;
  Image3: any;
  Image4: any;
  description: string;

  selectedMainImageName: string;
  selectedMainImage1Name: string;
  selectedMainImage2Name: string;
  selectedMainImage3Name: string;
  selectedMainImage4Name: string;

   images: File[] = [];

  constructor(private router: Router, private Aut: AuthenticationService
    , private firebaseService: FirebaseService, private alertController: AlertController) {



  }
  ngOnInit(): void {


  }


 async onSubmit(form: any) {
 
    if (form.valid) {

      let UserData = JSON.parse(sessionStorage.getItem("UserData"));


       
      if(! this.MainImage){

        const alert =  await this.alertController.create({
          header: 'Error',
          message: 'You must enter the main image.',
          buttons: ['OK']
        });
        (await alert).present();
      
      } else if(! this.Image1){

        const alert =  await this.alertController.create({
          header: 'Error',
          message: 'You must enter the image 1.',
          buttons: ['OK']
        });
        (await alert).present();
      
      } else if(! this.Image2){

        const alert =  await this.alertController.create({
          header: 'Error',
          message: 'You must enter the image 2.',
          buttons: ['OK']
        });
        (await alert).present();
      
      } else if(! this.Image3){

        const alert =  await this.alertController.create({
          header: 'Error',
          message: 'You must enter the image 3.',
          buttons: ['OK']
        });
        (await alert).present();
      
      } else if(! this.Image4){

        const alert =  await this.alertController.create({
          header: 'Error',
          message: 'You must enter the image 4.',
          buttons: ['OK']
        });
        (await alert).present();
      
      } else {

      
      let formData: any = {
        description: this.description
      }; 
      await this.updateDataToCollection(form , UserData.documentId, formData);
       }
    }



  }


  onFileSelected(event: any, TypeImage: number) {
    const file: File = event.target.files[0];
    if (file) {
      

      this.convertToBase64(file).then((base64String: string) => {

        if (TypeImage == 0) {
          this.selectedMainImageName = file.name;
          this.MainImage = file;
        } else if (TypeImage == 1) {

          this.selectedMainImage1Name = file.name;
          this.Image1 = file;

        } else if (TypeImage == 2) {
          this.selectedMainImage2Name = file.name;
          this.Image2 = file;

        } else if (TypeImage == 3) {
          this.selectedMainImage3Name = file.name;
          this.Image3 = file;
        } else if (TypeImage == 4) {
          this.selectedMainImage4Name = file.name;
          this.Image4 = file;
        }



      });
    }
  }


  convertToBase64(file: any): Promise<string> {
  
    /*return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });*/

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = URL.createObjectURL(file); // Create a URL for the file
        resolve(url);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
    });
  }

  getFileName(path: string): string {

    if (path) {
      const startIndex = (path.indexOf('\\') >= 0 ? path.lastIndexOf('\\') : path.lastIndexOf('/'));
      const filename = path.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        return filename.substring(1);
      }
      return filename;
    }
    return '';
  }



  async updateDataToCollection(form:any,documentId: string, data: any) {

 


    this.images.push(this.MainImage);
      
    data.MainImage = await this.firebaseService.uploadFile(this.images)[0];

    this.images = [];
    this.images.push(this.Image1);
    data.Image1 = await this.firebaseService.uploadFile(this.images)[0];

    this.images = [];
    this.images.push(this.Image2);
    data.Image2 = await this.firebaseService.uploadFile(this.images)[0];
 
    

    this.images = [];
    this.images.push(this.Image3);
    data.Image3 = await this.firebaseService.uploadFile(this.images)[0];

    this.images = [];
    this.images.push(this.Image4);
    data.Image4 = await this.firebaseService.uploadFile(this.images)[0];

   

    const collectionName = 'sport_centers';
 
    await this.firebaseService.updateData(collectionName, documentId, data)
      .then(async (result) => {
        const alert = await this.alertController.create({
          header: 'Successfully',
          message: 'New information has been added successfully.',
          buttons: ['OK']
        });
        await alert.present();
 
        this.resetForm(form)

      })
      .catch(async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Failed to add new information.',
          buttons: ['OK']
        });
        await alert.present();
        console.log(error);
        this.resetForm(form)
      });

    
  }


  resetForm(form){
    this.selectedMainImageName ='';
    this.selectedMainImage1Name ='';
    this.selectedMainImage2Name ='';
    this.selectedMainImage3Name ='';
    this.selectedMainImage4Name ='';
    form.reset();
  }
}
