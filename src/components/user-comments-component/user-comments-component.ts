import { Component } from '@angular/core';

/**
 * Generated class for the UserCommentsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'user-comments-component',
  templateUrl: 'user-comments-component.html'
})
export class UserCommentsComponent {

  text: string;

  constructor() {
    console.log('Hello UserCommentsComponent Component');
    this.text = 'Hello World';
  }

}
