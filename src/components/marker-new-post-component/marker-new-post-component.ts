import { Component, OnInit } from '@angular/core';
import {UserService} from '../../providers/user-service';


/**
 * Generated class for the MarkerNewPostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-marker-new-post',
  templateUrl: 'marker-new-post-component.html',
  providers: [UserService]
})
export class MarkerNewPostComponent implements OnInit{

private user;
  constructor(private _userService: UserService) { }

  ngOnInit() {    
    this.loadNewPostMarker();
  }

  loadNewPostMarker(){
     this._userService.getLoggedinInUser().subscribe(s => {

       this.user = s;
     
    });
  }

  redirecttoNewPost(){   

    //this._router.navigate(["/NewPost"]);

  }

}
