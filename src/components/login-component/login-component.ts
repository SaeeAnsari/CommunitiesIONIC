import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login-component',
  templateUrl: 'login-component.html'
})
export class LoginComponent {

  text: string;

  constructor(public nav: NavController,
    public vc: ViewController,
    public navParams: NavParams) {

  }

  closeModal() {

    this.vc.dismiss();
  }

  registerClicked(){
    let data = {
      isRegistering: true      
    };

    this.vc.dismiss(data);
  }
}
