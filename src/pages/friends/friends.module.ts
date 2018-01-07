import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Friends } from './friends';

@NgModule({
  declarations: [
    Friends,
  ],
  imports: [
    IonicPageModule.forChild(Friends),
  ],
})
export class FriendsPageModule {}
