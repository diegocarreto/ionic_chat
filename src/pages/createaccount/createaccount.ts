import { UserModel } from './../../models/user-model';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the CreateaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html',
})
export class CreateaccountPage {

  name: string;
  user: string;
  pwd: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private loadinontroller: LoadingController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateaccountPage');
  }

  createAccountServices() {
    
    let loading = this.loadinontroller.create({
        content: 'Crear cuenta',
        spinner: 'dots'
      }
    );

    loading.present();

    let user = new UserModel();

    user.name = this.name;
    user.pwd = this.pwd;
    user.user = this.user;

    console.log(user);

    // setTimeout(() => {
      
    //   loading.dismiss();

    //   let alert = this.alertCtrl.create({
    //     title: 'Low battery',
    //     subTitle: '10% of battery remaining',
    //     buttons: ['Dismiss']
    //   });
    //   alert.present();

    // }, 3000);

    let alert = this.alertCtrl.create({
          title: 'Exito!!',
          subTitle: 'Cuenta creada',
          buttons: ['OK']
        });
       

        

    this.userProvider.createUser(user)
      .subscribe(response => {

        alert.present();
        console.log('cuenta creada');

        this.navCtrl.popToRoot();

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
