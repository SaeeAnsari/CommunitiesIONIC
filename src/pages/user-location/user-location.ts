import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the UserLocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-location',
  templateUrl: 'user-location.html',
})
export class UserLocation {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {

    //will load hre

    console.log('ionViewDidLoad UserLocation');
  }

}
