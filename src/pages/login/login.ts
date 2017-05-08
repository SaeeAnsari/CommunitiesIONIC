import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { LiveFeed } from '../live-feed/live-feed';

import { FacebookAuth, User, AuthLoginResult, Auth } from '@ionic/cloud-angular';

import {LoginComponent} from '../../components/login-component/login-component';
import {RegisterUserComponent} from '../../components/register-user-component/register-user-component';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  loginDetails: AuthLoginResult;

  constructor(public auth: Auth, private facebook: FacebookAuth, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  /*
    login() {
      try {

        let x = 0;
  
  
        var loginDetails = this.facebook.login().then(result => {
           alert(result);        
        });
       
      }
      catch (e) {
        console.log(e);
        alert(e);
      }
    }
  */


  facebookLogin() {

    this.auth.login('facebook').then(e => {
      alert('all done');
    });
  }

  loginClicked(){

    let loginRegisterModal = this.modalCtrl.create(LoginComponent, null, { showBackdrop: true, enableBackdropDismiss: true });

    loginRegisterModal.onDidDismiss(data => {

      if (data) {
        if(data.isRegistering){
          this.loadRegistrationModal();
        }       
      }
    });
    loginRegisterModal.present();
  }

  loadRegistrationModal(){
    let registerModal = this.modalCtrl.create(RegisterUserComponent, null, { showBackdrop: true, enableBackdropDismiss: true });

    registerModal.onDidDismiss(data => {

      if (data) {
        if(data.isRegistering){
          this.loadRegistrationModal();
        }       
      }
    });
    registerModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
