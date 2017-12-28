import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

//PROVIDERS
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';
//PAGES
import { ShareWithFriendsPage } from '../../pages/share-with-friends/share-with-friends';

/**
 * Generated class for the SharePopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'share-popover',
  templateUrl: 'share-popover.html',
  providers:[SocialSharing]
})
export class SharePopoverComponent {

  Communities: any;
  text: string;
  ShareOptions: any;
  Friends:any;
  Post = [];


  constructor(	private SociaCtrl: SocialSharing,
  				      private OtherlyCtrl: OtherlyApiProvider,
                private NavCtrl: NavController,
                public NavParamsCtrl: NavParams) {

  	this.OtherlyCtrl.GetCommunities('access_token', {}).then(data =>{
  	  this.Communities = data;
  		console.log('COMMUNITIES ' + JSON.stringify(this.Communities));
  	});

    // this.OtherlyCtrl.GetFriendsList('',{})
    //      .then(data => {
    //        this.Friends = data;
    // });
    this.Post = this.NavParamsCtrl.get('post_details');
    console.log("POST DETAILS :" + JSON.stringify(this.Post));


   
  }

  ShareFB(){

  	this.SociaCtrl.canShareVia('com.apple.social.facebook');
  	this.SociaCtrl.shareViaFacebook('Visitem', 'https://otherlymedia.s3.amazonaws.com/media/cache/56/a4/56a4b740521a6687b364f5e87fbf038f.jpg', 'https://other.ly').then(res=>{
  		console.log("facebook share reply ", JSON.stringify(res));
  	});
  }

  ShareWithFriends(){
    this.NavCtrl.push(ShareWithFriendsPage, {post_details: this.Post});
  }

  changed(){
  	console.log('Selected ' + this.ShareOptions);
  }

  ChooseCommunity(community){
  	console.log('Community ' + community);
  }

}
