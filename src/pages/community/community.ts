import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { CommunityService } from '../../providers/community-service';
import { MediaPostService } from '../../providers/media-post-service';
import { UserService } from '../../providers/user-service';

import {UserSearchComponent} from '../user-search-component/user-search-component';


/**
 * Generated class for the Community page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
  providers: [CommunityService, MediaPostService, UserService]
})
export class CommunityPage implements OnInit {

  public communityForm: FormGroup;
  public events: any[] = []; // use later to display form changes

  private id: number;
  name: string;
  private subscription;
  private isUploadingImage = false;
  private communityImage: string = '';
  private uploadMessage: string = '';
  private uploaded: boolean = false;


  constructor(private _fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams,
    private _communityService: CommunityService, private _mediaPost: MediaPostService, private _userService: UserService) {
  }

  ngOnInit() {
    this.communityForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      description: ['']
    });

    if(this.navParams.get('communityID')){
      this.id = +this.navParams.get("communityID");
      this.loadCommunity();
    }
  }


  saveCommunity(model, isValid: boolean) {
    if (this.id > 0 && this.id != undefined) {
      model.id = this.id;
    }

    if (this.communityImage != undefined && this.communityImage.length > 0) {
      model.imageURL = this.communityImage;
    }

    this._userService.getLoggedinInUser().subscribe(s => {
      let userID = s.ID;

      this._communityService.SaveCommunity(model, userID)
        .subscribe(sub => {
          this.id = sub;

          this.navCtrl.push(UserSearchComponent, {communityID: this.id});
        })
    });
  }

  fileChange(event) {

    this.isUploadingImage = true;

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);


      this._mediaPost.postImage(formData, 'Community').subscribe(sub => {
        this.uploaded = true;
        this.isUploadingImage = false;
        this.loadCommunity();

        this.communityImage = sub;
      });
    }
  }

  loadCommunity() {
    if (this.id > 0) {
      this._communityService.GetCommunity(this.id).subscribe(sub => {
        this.communityForm.controls['name'].setValue(sub.Name);
        this.communityForm.controls['description'].setValue(sub.Description);
      });

      this.uploadMessage = "Update?";
    }
    else {
      this.uploadMessage = "Gotta have a Picture!"
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Community');
  }

}
