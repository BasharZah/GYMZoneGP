import { Component, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonInput } from '@ionic/angular';
 

@Component({
  selector: 'app-forgetpassword-modal',
  templateUrl: './forgetpassword-modal.page.html',
  styleUrls: ['./forgetpassword-modal.page.scss'],
})
export class ForgetpasswordModalPage {
  @ViewChild("userNameF", { static: false }) userNameFInput: IonInput
  constructor(private navParams: NavParams, private modalController: ModalController ) {

  }


 

  closeXModal() {
    this.modalController.dismiss();
  }
}
