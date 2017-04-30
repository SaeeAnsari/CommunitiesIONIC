import { Component } from '@angular/core';

/**
 * Generated class for the UserPostsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'user-posts-component',
  templateUrl: 'user-posts-component.html'
})
export class UserPostsComponent {

  text: string;

  constructor() {
    console.log('Hello UserPostsComponent Component');
    this.text = 'Hello World';
  }

}
