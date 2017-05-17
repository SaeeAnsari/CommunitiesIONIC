import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { UserPost } from '../../interfaces/user-post';
import { StoryService } from '../../providers/story-service';
import { CommunityService } from '../../providers/community-service';
import { UserService } from '../../providers/user-service';





/**
 * Generated class for the LiveFeed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-live-feed',
  templateUrl: 'live-feed.html',
  providers: [StoryService, CommunityService, UserService]
})
export class LiveFeed implements OnInit {

  private userID: number;
  private posts: UserPost[] = [];
  private subscription;
  private communityID: number = 0;
  private pageIndex: number = 0;
  private communityName: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _storyService: StoryService,
    private _communityService: CommunityService,
    private _userService: UserService,
    public modalCtrl: ModalController) {

    if (this.navParams.get('communityID')) {
      this.communityID = this.navParams.get('communityID');
      this.getCommunityDetails();
      this.loadStories();
    }
    else {
      this._userService.getLoggedinInUser().subscribe(sub => {

        this.communityID = sub.DefaultCommunityID
        this.getCommunityDetails();
        this.loadStories();
      });
    }

  }


  getCommunityDetails() {
    this._communityService.GetCommunity(this.communityID)
      .subscribe(sub => {
        this.communityName = sub.Name;
      })
  }

  loadStories() {
    this.posts = [];
    this._storyService.GetStoriesByCommunity(this.communityID, this.pageIndex)
      .subscribe(postS => {

        postS.forEach(element => {

          this.posts.push({
            storyID: element.ID,
            title: element.Title,
            text: element.LongDescription,
            imageURL: element.ImageURL,
            likeCount: element.ActionSummary.SupportCount,
            dislikeCount: element.ActionSummary.DisagreeCount,
            commentsCount: element.ActionSummary.CommentCount,
            totalViews: element.ActionSummary.ViewCount,
            userID: element.StoryUser.ID,
            postDate: element.Timestamp,
            userProfileImage: element.StoryUser.ImageURL,
            userFullName: element.StoryUser.DisplayName
          });
        });
      });
  }

  ngOnInit() {

  }

  StorySaved(){
    this.loadStories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveFeed');
  }


}
