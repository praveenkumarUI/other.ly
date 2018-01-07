import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, PopoverController } from 'ionic-angular';

//provider
import { LocaldataProvider } from '../../providers/localdata/localdata';
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';
import { PostDetailPage } from '../../pages/post-detail/post-detail';

//COMPONENTS
import { SharePopoverComponent } from '../../components/share-popover/share-popover'
/**
 * Generated class for the HomeFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-feed',
  templateUrl: 'home-feed.html',
})
export class HomeFeedPage {
  private post_text: any;
  private radio_array=[];
  input : string;
  list = [];
  API_List:any;
	UserData: any;
	Feeds: any;

  constructor(	public navCtrl: NavController, 
  				      public navParams: NavParams,
  				      private OtherlyAPI: OtherlyApiProvider,
          		  private Lds: LocaldataProvider,
                private toastCtrl: ToastController,
                public alertCtrl: AlertController,
                public PopOverCtrl: PopoverController) {
    let List:any;
  	this.Lds.getUser().then(data => {
         this.UserData = data;


         //USER INFORMATIONS HAVE BEEN RECEIVED HERE
         
         this.OtherlyAPI.GetFeedList(this.UserData.otherly_token,{})
         .then(data => {
           this.Feeds = data;
           console.log("Feed DATA: " + JSON.stringify(this.Feeds));
          });






         this.OtherlyAPI.GetFriendsList(this.UserData.otherly_token,{})
         .then(data => {
           this.API_List = data;
           //console.log("Friends page USER DATA: " + JSON.stringify(this.API_List))

           //if(this.API_List.length >= 2){

            for (let item in this.API_List)
            this.list.push(this.API_List[item])


            List = this.list.sort(function(a, b){
              if ( a.instance.full_name < b.instance.full_name )
                  return -1;
              if ( a.instance.full_name > b.instance.full_name )
                  return 1;
              return 0;

            });

            

            for (let item of List){

              console.log("username : "+ item.instance.username);

              this.radio_array.push({
                label: item.instance.full_name,
                type: 'checkbox',
                value: item.instance.username,
                name: item.instance.full_name
              });

            }

          });


     });

    
    



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeFeedPage');
  }

  createPost(){

    let toast = this.toastCtrl.create({
          message: 'Post Created Successfully',
          duration: 3000,
          position: 'top'
    });

    
    console.log("post text: " + this.post_text);

    if(this.post_text!= ""){
      this.OtherlyAPI.CreatePost(this.post_text, this.UserData.otherly_token).then(res => {
        console.log(res);
 
        toast.present();
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        this.post_text = "";

      })
      
    }

  }


  ReplyPrompt(Post_detail) {

    let toast = this.toastCtrl.create({
          message: 'Post Replied Successfully',
          duration: 3000,
          position: 'top'
    });
    console.log("post "+ JSON.stringify(Post_detail));
    let prompt = this.alertCtrl.create({
      title: 'Comment',
      message: Post_detail.text,
      inputs: [
        {
          name: 'comment',
          placeholder: 'Enter your comment here...'
        },
        {
        name: 'code',
        type: 'hidden',
        value: Post_detail.code
      }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {

            this.OtherlyAPI.ReplyPost(data.comment, data.code, this.UserData.otherly_token).then(res=>{
              console.log("Replied data" + JSON.stringify(res));
              toast.present();

            });
            console.log('Save clicked ' + JSON.stringify(data));
          }
        }
      ]
    });
    prompt.present();
  }

  OpenPost(Post_detail){
    this.navCtrl.push(PostDetailPage,{code:Post_detail.code});
  }



  SharePrompt(Post_detail) {
    let Popover = this.PopOverCtrl.create(SharePopoverComponent,{post_details:Post_detail});
    Popover.present();
  }

 


  //   this.radio_array.push({
  //       name: 'code',
  //       type: 'text',
  //       value: Post_detail.code
  //     });

  //   this.input= "["+this.radio_array+"]";
  //   let toast = this.toastCtrl.create({
  //         message: 'Post Shared Successfully',
  //         duration: 3000,
  //         position: 'top'
  //   });


  //   let API_List: any;
  //   let List=[];
    

    
                        

  //           console.log("Radio array " +JSON.stringify(this.radio_array));

  //           let prompt = this.alertCtrl.create({
  //           title: 'Sharing post',
  //           message: Post_detail.text,
  //           inputs: this.radio_array,
           
              
              
            
  //           buttons: [


  //             {
  //               text: 'Cancel',
  //               handler: data => {
  //                 console.log('Cancel clicked');
                  
  //               }
  //             },
  //             {
  //               text: 'Share',
  //               handler: data => {

  //                 let users : string;
  //                 let item_left: number;
  //                 item_left = data.length;
  //                 users = "{"
  //                 for (let info of data){
                   
  //                   users += '"'+info+'": true';
  //                   item_left = item_left - 1;
  //                   if(item_left != 0 ){
  //                     users += ",";
  //                   }

  //                 }
  //                 users += "}";
  //                 let post_code:string;

  //                 for(let code of this.radio_array){
  //                   if(code.name == 'code'){
  //                     post_code = code.value;
  //                   }
  //                 }
                  
  //                 console.log('Save clicked ' + JSON.stringify(users));

  //                 this.OtherlyAPI.SharePost(post_code, users, this.UserData.otherly_token).then(res=>{
  //                    console.log("Shared post" + JSON.stringify(res));
  //                    toast.present();

  //                 });

  //               }
  //             }
  //           ]
  //         });
          
  //         prompt.present();
         
     

    

    
    
  // }

}
