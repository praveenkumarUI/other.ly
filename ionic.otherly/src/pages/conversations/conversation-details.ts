import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Content} from 'ionic-angular/index';

//provider
import { LocaldataProvider } from '../../providers/localdata/localdata';
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';


/**
 * Generated class for the ConversationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-conversation-details',
  templateUrl: 'conversation-details.html',
})
export class ConversationDetailsPage {
  @ViewChild(Content) content: Content;

  reply:any;
  code:string;
  details:any;
  Details=[];
  replies = [];
 
  constructor(private OtherlyAPI: OtherlyApiProvider,
    
    private Lds: LocaldataProvider, public navCtrl: NavController, public navParams: NavParams) {
      this.code = this.navParams.get('conv_code');
      OtherlyAPI.GetConversationDetails(this.code).then(data => {
           this.details = data;        
          for(let item in this.details){
            for(let reply in this.details[item].replies){
              this.replies.push(this.details[item].replies[reply]);
            }
          }
          this.replies.reverse();
        for (let item in this.details){
          this.Details.push(this.details[item]);        
      }
    });
  }
  ionViewDidLoad() {
    // this.content.scrollToBottom();

    setTimeout(() => {
      this.content.scrollToBottom(300);
   }, 1000);
  }
  replyConversation(){
      let text = this.reply;
    this.OtherlyAPI.ReplyConversation(this.reply,this.code).then(data=>{
       this.replies.push({
          text: text,
          participant:{
            user:{
              first_name:'ITS ME',
              last_name:'my last name'
            }
          }
        });  
        setTimeout(() => {
          this.content.scrollToBottom(300);
       }, 500);

      });  
     this.reply='';
  }
  clearConversation(){
    this.reply = '';
  }
  ionViewDidEnter() {
    this.content.scrollToBottom();
  }
}
