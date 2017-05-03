import { Component, OnInit, Input } from '@angular/core';
import { UserCommentsComponent } from '../user-comments-component/user-comments-component';

import { ModalController, NavParams } from 'ionic-angular';
/**
 * Generated class for the UserPostsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-user-post',
  templateUrl: 'user-posts-component.html'
})
export class UserPostsComponent implements OnInit {

  @Input() PostMessage: string;
  @Input() PostMediaURL: string;
  @Input() StoryID: number;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {

  }

  openComments() {

    let commentsModal = this.modalCtrl.create(UserCommentsComponent, { storyID: this.StoryID }, {showBackdrop: true, enableBackdropDismiss: true} );

    commentsModal.onDidDismiss(data => {
     console.log(data);
   });
    commentsModal.present();

//alert('broke this as we need  to IONIZe it');
    /*
    const modalRef = this._modalService.open(UserCommentsComponent, { windowClass: 'dark-modal' } );   
    modalRef.componentInstance.storyID = this.StoryID;
    modalRef.componentInstance.loadComments();
    */
  }

}
