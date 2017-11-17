import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Location',
      subTitle: 'Jalan Kayu Jati I Rawamangun, Jakarta Timur Indonesia ',
      buttons: ['OK']
    });
    alert.present();
  }
}
