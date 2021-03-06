import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { FacebookAuth, User, AuthLoginResult, Auth } from '@ionic/cloud-angular';

import { LoginComponent } from '../../components/login-component/login-component';
import { RegisterUserComponent } from '../../components/register-user-component/register-user-component';
import { UserLocation } from '../user-location/user-location';
import { UserService } from '../../providers/user-service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { ErrorLogServiceProvider } from '../../providers/error-log-service/error-log-service';

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
  providers: [UserService, Facebook, ErrorLogServiceProvider]
})
export class Login {

  loginDetails: AuthLoginResult;

  constructor(
    public auth: Auth,
    private facebook: FacebookAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private _userService: UserService,
    private fb: Facebook,
    private err: ErrorLogServiceProvider
  ) {
  }

  facebookLogin() {

    /*this.auth.login('facebook').then(e => {
      alert('all done');
    });*/


    this.err.logError('Login FB Clicked').subscribe();

    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {


        this.err.logError('Login FB Logged in').subscribe();

        console.log('Logged into Facebook!', res);
        sessionStorage.setItem('userID', '1');
        this.ionViewDidLoad();
      })
      .catch(e => {
        this.err.logError('Login FB Failed + ' + JSON.stringify(e)).subscribe()
      });


    //this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  loginClicked() {

    let loginRegisterModal = this.modalCtrl.create(LoginComponent, null, { showBackdrop: true, enableBackdropDismiss: true });

    loginRegisterModal.onDidDismiss(data => {

      if (data) {
        if (data.isRegistering) {
          this.loadRegistrationModal();
        }
      }
    });
    loginRegisterModal.present();
  }

  loadRegistrationModal() {
    let registerModal = this.modalCtrl.create(RegisterUserComponent, null, { showBackdrop: true, enableBackdropDismiss: true });

    registerModal.onDidDismiss(data => {

      if (data) {
        if (data.id) {
          this.navCtrl.push(UserLocation, data);

        }
      }
    });
    registerModal.present();
  }

  ionViewDidLoad() {
    if (+sessionStorage.getItem('userID') > 0) {
      this._userService.getLoggedinInUser().subscribe(s => {
        if (s.ID > 0 && s.DefaultCommunityID > 0) {
          let communityID = s.DefaultCommunityID;
          this.navCtrl.push(TabsPage, { communityID: communityID });
        }
      });
    }

    this.err.logError('Login Loaded').subscribe();

    console.log('ionViewDidLoad Login');
  }

}
