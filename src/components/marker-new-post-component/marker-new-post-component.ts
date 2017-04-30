import { Component } from '@angular/core';

/**
 * Generated class for the MarkerNewPostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'marker-new-post-component',
  templateUrl: 'marker-new-post-component.html'
})
export class MarkerNewPostComponent {

  text: string;

  constructor() {
    console.log('Hello MarkerNewPostComponent Component');
    this.text = 'Hello World';
  }

}
