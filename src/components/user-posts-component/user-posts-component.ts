import { Component, OnInit, Input } from '@angular/core';
import { UserCommentsComponent } from '../user-comments-component/user-comments-component';
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

  constructor() { }

  ngOnInit() {
    
  }

  openMessages(){
    
    alert('broke this as we need  to IONIZe it');
    /*
    const modalRef = this._modalService.open(UserCommentsComponent, { windowClass: 'dark-modal' } );   
    modalRef.componentInstance.storyID = this.StoryID;
    modalRef.componentInstance.loadComments();
    */      
  }

}
