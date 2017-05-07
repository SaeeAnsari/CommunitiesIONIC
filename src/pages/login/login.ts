import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LiveFeed } from '../live-feed/live-feed';

import { FacebookAuth, User, AuthLoginResult, Auth } from '@ionic/cloud-angular';


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

  constructor(public auth: Auth, private facebook: FacebookAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  
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
  
  
/*
  login() {
    this.auth.login('facebook').then(e => {
      alert('all done');
    });
  }
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
