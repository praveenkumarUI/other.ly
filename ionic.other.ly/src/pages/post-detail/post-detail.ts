import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//provider
import { LocaldataProvider } from '../../providers/localdata/localdata';
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {
	UserData:any;
	PostCode:string;
	PostDetails: any;

	Details=[];



  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				public Lds: LocaldataProvider,
  				public OtherlyAPI: OtherlyApiProvider) {

  	
  	this.PostCode = this.navParams.get('code');
  	this.Lds.getUser().then(data => {
         this.UserData = data;
     });

  	this.OtherlyAPI.GetPostDetails('', this.PostCode).then(data =>{
  		this.PostDetails = data;
  		
  		for(let item in this.PostDetails){
  			for (let reply in this.PostDetails[item].replies)
  			this.Details.push(this.PostDetails[item].replies[reply]);
  		}
  		console.log("REPLY DETAILS " + JSON.stringify(this.Details));
  	});

  }



  ionViewWillLoad() {
  	
    console.log('Is Loading PostDetailPage ' + this.PostCode);
  }

}
