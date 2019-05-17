import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CreateaccountPage } from '../createaccount/createaccount';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: string;
  pwd: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private loadinontroller: LoadingController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goCreateAccount() {

    this.navCtrl.push(CreateaccountPage);
  }

  goLogin() {

    let loading = this.loadinontroller.create({
      content: 'Crear cuenta',
      spinner: 'dots'
    }
    );

    let alert = this.alertCtrl.create({
      title: 'Exito!!',
      subTitle: 'Login',
      buttons: ['OK']
    });

    this.userProvider
      .userLogin(this.user, this.pwd)
      .subscribe(response => {

        console.log(response);

        alert.present();

        this.navCtrl.setRoot(HomePage,response);

      }, error => {

        console.log('error');

        loading.dismiss();

        alert.data.content = "Error";
        alert.present();

      }, () => {

        console.log('terminado');
        loading.dismiss();
      });
  }
}
