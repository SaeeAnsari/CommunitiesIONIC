import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {Community} from '../community/community';
import {LiveFeed} from '../live-feed/live-feed';

import {UserSearchComponent} from '../user-search-component/user-search-component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = LiveFeed;
  tab1Root = Community;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
