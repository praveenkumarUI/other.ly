import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts } from '@ionic-native/contacts';

//provider
import { LocaldataProvider } from '../../providers/localdata/localdata';
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';
import {CreateConversationPage} from '../../pages/conversations/create-conversation';
import {ConversationDetailsPage} from '../../pages/conversations/conversation-details';

/**
 * Generated class for the ConversationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversations',
  templateUrl: 'conversations.html',
  providers:[Contacts]
})
export class ConversationsPage {

 Conversations:any;
 NumberofUsers:Number;


  constructor(private OtherlyAPI: OtherlyApiProvider,
                private Lds: LocaldataProvider,private navCtrl:NavController ) {
  
  
    this.OtherlyAPI.GetConversations('',{})
    .then(data => {
      this.Conversations = data;
      var conversationTemp:any = JSON.stringify(data);
     let numU =[];
    
      numU.push(this.Conversations);


    });            
  }

  new_talk(){

      this.navCtrl.push(CreateConversationPage);

  }

  showConversationDetails(code:string){

    this.navCtrl.push(ConversationDetailsPage,{conv_code:code});
  }
  
}
