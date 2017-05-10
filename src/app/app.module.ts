import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CloudModule, CloudSettings} from '@ionic/cloud-angular';



import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {Community} from '../pages/community/community';
import {LiveFeed} from '../pages/live-feed/live-feed';

import {MarkerNewPostComponent} from '../components/marker-new-post-component/marker-new-post-component';
import {UserCommentsComponent} from '../components/user-comments-component/user-comments-component';
import {UserPostActionComponent} from '../components/user-post-action-component/user-post-action-component';
import {UserPostsComponent} from '../components/user-posts-component/user-posts-component';
import {UserTagComponent} from '../components/user-tag-component/user-tag-component';


import {UserSearchComponent} from '../pages/user-search-component/user-search-component';
import {UserSearchItemComponent} from '../components/user-search-item-component/user-search-item-component';
import {NewCommentComponent} from '../components/new-comment-component/new-comment-component';

import {LoginComponent} from '../components/login-component/login-component';
import {RegisterUserComponent} from '../components/register-user-component/register-user-component';

import {UserLocation} from '../pages/user-location/user-location';


import {Login} from '../pages/login/login';



const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'd87bdde8'
  },
  'auth': {
    'facebook' : {
      'scope': []
    }
  }
}


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Community,
    UserSearchComponent,
    UserSearchItemComponent,
    LiveFeed,
    MarkerNewPostComponent,
    UserCommentsComponent,
    UserPostActionComponent,
    UserPostsComponent,
    UserTagComponent,
    NewCommentComponent,
    Login,
    LoginComponent,
    RegisterUserComponent,
    UserLocation
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Community,
    UserSearchComponent,
    LiveFeed,
    UserCommentsComponent,
    NewCommentComponent,
    Login,
    LoginComponent,
    RegisterUserComponent,
    UserLocation
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
