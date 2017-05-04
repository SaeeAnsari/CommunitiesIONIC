import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { StoryService } from '../../providers/story-service';


import { UserPost } from '../interfaces/user-post';
import { User } from '../interfaces/user';
import { MediaPostService } from '../../providers/media-post-service';
import { CommunityService } from '../../providers/community-service';
import { UserService } from "../../providers/user-service";


import { ViewController, NavParams, NavController } from 'ionic-angular';



/**
 * Generated class for the NewCommentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'new-comment-component',
  templateUrl: 'new-comment-component.html',
  providers: [UserService, StoryService, MediaPostService, CommunityService]
})
export class NewCommentComponent implements OnInit {


  private user;
  private isUploadingImage: boolean = false;
  private uploaded: boolean = false;
  private postText: string = "";
  private mediaName: string = "";
  private mediaType: string = "";

  private videoSelected: boolean = false;
  private imageSelected: boolean = false;

  private activeCommunity;

  private userCommunities = [];


  private optionsModel: number[] = [];

  constructor(private _fb: FormBuilder,
    private _userService: UserService,
    private _storyService: StoryService,
    private _mediaPost: MediaPostService,
    private _community: CommunityService,
    public nav: NavController,
    public vc: ViewController,
    public navParams: NavParams) {

  }

  ngOnInit() {
    this._userService.getLoggedinInUser().subscribe(sub => {

      this.user = {
        id: sub.ID,
        displayName: sub.DisplayName,
        imageURL: sub.ImageURL,
        defaultCommunityID: sub.DefaultCommunityID
      };

      this.activeCommunity = this.user.defaultCommunityID;

      if (sessionStorage.getItem("activeCommunity") != null) {

        this.activeCommunity = sessionStorage.getItem("activeCommunity").toString();
      }

       this.optionsModel.push(this.activeCommunity);
 
      this._community.GetUserCommunities(this.user.id).subscribe(sub => {

        this.userCommunities = [];

        //set the array
        sub.forEach(element => {

          this.userCommunities.push({ id: element.ID, name: element.Name });
        });


      });
    });

  }

  post() {

    if (this.user && (this.postText != '' || this.mediaName != '')) {

      this._storyService.SavePost(this.user.id, this.postText, this.mediaType, this.mediaName, this.optionsModel).subscribe(sub => {
        let id = sub;
        this.isUploadingImage = false;
        this.uploaded = false;
        this.postText = "";
        this.mediaName = "";
        this.mediaType = "";
        this.videoSelected = false;
        this.imageSelected = false;

        this.vc.dismiss({storyID: id});


        this.optionsModel = [];
        this.optionsModel.push(this.user.defaultCommunityID);

        if (this.user.defaultCommunityID > 0) {

          let activeCommunity = this.user.defaultCommunityID;

          if (sessionStorage.getItem("activeCommunity") != null) {

            activeCommunity = +sessionStorage.getItem("activeCommunity")
          }

        }
      });
    }
  }

  imageFileChange(event) {
    this.imageSelected = true;
    this.uploaded = false;
    this.isUploadingImage = true;

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);


      this._mediaPost.postImage(formData, 'Story').subscribe(sub => {
        this.uploaded = true;
        this.isUploadingImage = false;

        this.mediaName = sub;
        this.mediaType = "Image";

      });
    }
  }

  videoFileChange(event) {
    this.videoSelected = true;
    this.uploaded = false;
    this.isUploadingImage = true;

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);


      this._mediaPost.postVideo(formData).subscribe(sub => {
        this.uploaded = true;
        this.isUploadingImage = false;

        this.mediaName = sub;
        this.mediaType = "Video";
      });
    }
  }

  closeModal() {
    /*let data = {
      storyID: this.storyID,
      commentsCount: this.comments.length
    };*/
    this.vc.dismiss();
  }

  getSelected(val){
    console.log(val);
  }

  test() {
    var c = 0;
    c++;
  }


}
