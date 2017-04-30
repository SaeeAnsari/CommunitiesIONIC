import { Component } from '@angular/core';

/**
 * Generated class for the UserPostActionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'user-post-action-component',
  templateUrl: 'user-post-action-component.html'
})
export class UserPostActionComponent {

  text: string;

  constructor() {
    console.log('Hello UserPostActionComponent Component');
    this.text = 'Hello World';
  }

}
