import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, IonicPage } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { LocaldataProvider } from '../../providers/localdata/localdata';
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';

import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
//import { GoogleAuth, User } from '@ionic/cloud-angular';
import { GooglePlus } from '@ionic-native/google-plus';
//import {}
import { Contacts, ContactFieldType, ContactFindOptions, Contact } from '@ionic-native/contacts';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Contacts]
})

export class LoginPage {
  loading: Loading;
  UserData = null;
  userdata:any;
  constructor(	public navCtrl: NavController, 
  				private Facebook: Facebook,
  				private googlePlus: GooglePlus,
          public lds: LocaldataProvider,
          public OtherlyAPI: OtherlyApiProvider,
          private loadingCtrl:LoadingController,
          private contacts: Contacts

  				) {


    // let getData$ = new Observable(observer => {
    //     this.UserData(() =>{
    //       console.log('Observable');
    //       observer.next(this.UserData);
    //     })
    // });

    // getData$.subscribe(data => console.log(JSON.stringify(data)));

  }


  FBlogin(){
    this.getFacebook().then(data=>{
      //this.UserData = {email: data['email'], first_name: data['first_name'], last_name: data['last_name'], picture:data['picture_large']['data']['url'], user_name:data['name']};

      
      console.log("FBlogin "+ JSON.stringify(data));
      //this.lds.setUser(data);
      //this.navCtrl.setRoot(TabsPage);
    });

  }

  showLoading() {
    
  }



  getFacebook(){

   this.loading = this.loadingCtrl.create({
      content: 'Loading. Please wait...',
      dismissOnPageChange: false // This attribute set to true is trying to dismiss a page which no longer exits set to false error stops
    });
    
   
   let data: any;
   let access_token: any;
   let Otherly_data:any;

    return new Promise(resolve=>{
      this.Facebook.login(['email','public_profile']).then((response: FacebookLoginResponse)=>{
      access_token = response;



      this.Facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile => {
      data = {email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'], picture:profile['picture_large']['data']['url'], user_name:profile['name']};
      this.UserData = {email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'], picture:profile['picture_large']['data']['url'], user_name:profile['name']};
      
      console.log("access token: " + JSON.stringify(access_token.authResponse.accessToken));

      this.loading.present();
      this.OtherlyAPI.GetOtherlyAccessToken(access_token.authResponse.accessToken).then(res =>{

        Otherly_data = res;

        console.log('SENDING TO SAVE USER otherly-token: '+ Otherly_data);
        this.lds.setUser(data, Otherly_data);
        this.navCtrl.setRoot(TabsPage);
        this.loading.dismiss();
      });
      
     
      
      })
    })


    console.log('promise');
    return Promise.resolve(data);

    });


  }

  Googlelogin(){
    let Otherly_data:any;
 
  	this.googlePlus.login({      
      'webClientId': '328442368660-gd8ga07as2c268oqn1jkl6gb2ti6dbb6.apps.googleusercontent.com',
      'offline': true,
      'scope':'names, email'  
    }).then(
    (res) => {
      this.UserData=JSON.stringify(res);
      //alert(res.idToken);

      //sending token to otherly API
      this.OtherlyAPI.GoogleGetOtherlyAccessToken(res.idToken).then(res =>{
      Otherly_data = res;
      //alert(Otherly_data);
      
      this.loading.dismiss();
    });
    
      this.navCtrl.setRoot(TabsPage);
    },
    (err) => {
      alert('Error while getting access token: ' + JSON.stringify(err));
    });
  }
}
