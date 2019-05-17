import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  names= ['name 1','name 2','name 3','name 4','name 5','name 6','name 7','name 8','name 9','name 10',];
  user : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.user = navParams.get("user");

    console.log('El usuario es: ' + this.user);
    console.log('El objeto es: ' + navParams.data.age);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }


  back()
  {
    this.navCtrl.pop();
  }

  backStart()
  {
    this.navCtrl.popToRoot();
  }

}
