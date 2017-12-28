import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

//provider
import { LocaldataProvider } from '../../providers/localdata/localdata';
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';
import {ConversationDetailsPage} from '../../pages/conversations/conversation-details';

/**
 * Generated class for the CreateConversationNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-create-conversation-new',
  templateUrl: 'create-conversation-new.html',
})
export class CreateConversationNewPage {
  conversationSubject:any;
  usersSelected=[];

  constructor(private OtherlyAPI: OtherlyApiProvider,
    private Lds: LocaldataProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.usersSelected = this.navParams.get('users');
      
  }

  createConversation(){
    console.log("  createConversation ", JSON.stringify(this.conversationSubject));
    this.OtherlyAPI.CreateConversation(this.usersSelected, this.conversationSubject).then(data=>{
      console.log(" Code Returned  ", data );
      this.navCtrl.push(ConversationDetailsPage,{conv_code:data});
    });

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CreateConversationNewPage');
  }

}
