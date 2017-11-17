import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkPage } from '../work/work';
import { OtherPage } from '../other/other';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {}

    workPage(){
      this.navCtrl.push(WorkPage);
   
    }
    otherPage(){
      this.navCtrl.push(OtherPage);
   
    }

}
