import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



/*
  Generated class for the LocaldataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocaldataProvider {

	public UserData: any = {};

  constructor(public http: Http) {
    console.log('Hello LocaldataProvider Provider');


    this.UserData = { // APP starts as online to be able to comunicate to the server and get user credentials
			email: '',
			first_name: '',
			last_name: '',
			picture: '',
			user_name:''
		}
  }


  getUser(){

		return new Promise(resolve => {
			
			let res = this.UserData
			return resolve(res);

		});

	}

	setUser(user: any, Otherly_data: any){
		
		return new Promise(resolve => {

			
				//console.log('LocalData Otherly token: ' + Token )	

				this.UserData = {
					otherly_token: Otherly_data.token,
					email: user.email,
					first_name: user.first_name,
					last_name: user.last_name,
					picture: user.picture,
					user_name: user.user_name,
					thanks_sent: Otherly_data.user.thanks_sent,
					helps_given: Otherly_data.user.helps_given,
					date_joined: Otherly_data.user.date_joined
				}

				console.log("SET USER:" + JSON.stringify(this.UserData));

			});
		
	}

}
