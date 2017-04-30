import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Community } from './community';

@NgModule({
  declarations: [
    Community,
  ],
  imports: [
    IonicPageModule.forChild(Community),
  ],
  exports: [
    Community
  ]
})
export class CommunityModule {}
