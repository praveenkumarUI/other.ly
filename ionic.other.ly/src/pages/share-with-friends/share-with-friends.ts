import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events, App, Platform , PopoverController} from 'ionic-angular';

// Modules
import {IonTagsInputModule} from "ionic-tags-input";

//provider
import { LocaldataProvider } from '../../providers/localdata/localdata';
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';

//NATIVE FEATURES
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts } from '@ionic-native/contacts';

//PAGES
import { PostShareWithFriendsPage } from '../../pages/share-with-friends/post-share-with-friends';

/**
 * Generated class for the CreateConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-share-with-friends',
  templateUrl: 'share-with-friends.html',
  providers:[Contacts]
})
export class ShareWithFriendsPage {

  List = [];
  list = [];
  mobile_contact = [];
  API_List :any;
	items: any;
  contactlist: any;
  private UserData: any;
	private add_friends = false;
	private search_friend: any;
	private quantity : any;
  private search = -2;
  usersSelected=[];
  usernames=[];
  Post=[];
 
  

  constructor(public navCtrl: NavController, 
    public navParamsCtrl: NavParams,
    private inAppB: InAppBrowser,
    private OtherlyAPI: OtherlyApiProvider,
    private Lds: LocaldataProvider,
    public events: Events,
    public app: App) {

 	this.Post = this.navParamsCtrl.get('post_details');
 	console.log("SHARE WITH FRIENDS PAGE " + JSON.stringify(this.Post));
 
     this.Lds.getUser().then(data => {
          this.UserData = data;
 
 
          //USER INFORMATIONS HAVE BEEN RECEIVED HERE
          
          this.OtherlyAPI.GetFriendsList(this.UserData.otherly_token,{})
          .then(data => {
            this.API_List = data;
            
             for (let item in this.API_List)
             this.list.push(this.API_List[item])
 
 
             this.List = this.list.sort(function(a, b){
               if ( a.instance.full_name < b.instance.full_name )
                   return -1;
               if ( a.instance.full_name > b.instance.full_name )
                   return 1;
               return 0;
 
             });
          
            this.quantity = this.List.length;
 
          
          });
 
      });

  }



  ionSelected() {
    console.log("Friends has been selected");
    this.add_friends = false;
    console.log(this.add_friends);
  }

  goto(params){
    //const browser = this.inAppB.create("http://" + params+"" , '_self',{location:'yes'});
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.List.push( this.List.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  changeRating(username:string, rating:number){
    console.log('Change '+ rating);





    //let popover = this.PopOverCtrl.create(ChangeRatePopoverPage,{username:username,rate: rating},{});
    

    //popover.present();


    Object.keys(this.List).forEach((key) => {
          
          if(this.List[key].instance.username == username){
            if (this.List[key].instance.rating == rating)


              this.List[key].instance.rating = 0;

            else{
              this.List[key].instance.rating = rating;
            }
          }
    });





    for (let item of this.List){
      

      if( item.instance.username == username){
        console.log('Found: '+item.instance.username);
        }
      
    }
    
  }


  Search(){
  	this.search = -1;
  	console.log("Search field : " + this.search_friend);

  	/*this.OtherlyAPI.GetFriendsList('carlos',{search_str:this.search_friend})
       .then(data => {
       	this.API_List = data;

       	 //this.List = Object.keys(data);

       	this.search = this.List.length;

       	console.log("Quantity: " + this.search);

       	this.search = -2;

        //console.log("My Friends: " + JSON.stringify(this.List));
     });*/
     for (let item in this.list){
       if( this.list[item].indexOf(this.search_friend) >= 0){
        console.log('Found: '+this.list[item].full_name);
        }
     }

  }

  Show_Add_friends(){
  	this.add_friends = !this.add_friends;
  }



  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CreateConversationPage');
  // }

  selectUser(user:any){
	console.log(" Select User  ...................", user.full_name);
	//console.log(" updated Select User  ...................", this.usersSelected);
	let there_is=0;
	let len = this.usersSelected.length;
	if(this.usersSelected.length == 0){
	  this.usersSelected.push(user.full_name); 
	  this.usernames.push({
	  	username:user.username,
	  	full_name:user.full_name,
	  	photo_url: user.photo_url,
	  	status: user.status,
	  	rating: user.rating,
	  	helps_given : user.helps_given
	  });  
	}
	else{
	  for(let item in this.usersSelected){
	    if(len > 0){
	      if(this.usersSelected[item] == user.full_name){
	        console.log("Found User already selected");
	        there_is = 1;
	        // this.usersSelected.slice(this.usersSelected.indexOf(item));
	        let index = this.usersSelected.indexOf(this.usersSelected[item]);
	        console.log(" index ", index);
	        if(index > -1 ){
	          this.usersSelected.splice(index, 1);
	          this.usernames.splice(index, 1);
	        }
	      }
	      len = len -1;
	    }
	  }

	  if(there_is == 0){
	    this.usersSelected.push(user.full_name);
	    this.usernames.push({
	  	username:user.username,
	  	full_name:user.full_name,
	  	photo_url: user.photo_url,
	  	status: user.status,
	  	rating: user.rating,
	  	helps_given : user.helps_given
	  });
	  }
	  
	}
	console.log("usernames: " + JSON.stringify(this.usernames));


  }

  // onChange(val){
  //   console.log(this.usersSelected);
  // }
  onChange(val){
    //console.log(this.usersSelected);
  }

  nextConversation(){
    console.log( "NEXT......");
    
    this.navCtrl.push(PostShareWithFriendsPage,{users:this.usernames});
  }

}