import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Device } from '@ionic-native/device';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

//PROVIDER
import { LocaldataProvider } from '../localdata/localdata';


/*
  Generated class for the OtherlyApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.

*/

@Injectable()
export class OtherlyApiProvider {

  //private host;
  private _Proxy
  private Use_proxy = 1;
  private staging;
  private URL: string;
  public Otherly_data;
  private UserData;
  //private Otherly_access_token = 'ExUE4B0YfLHU1Mw5X3xGKrErnNpg4l';
  //private Otherly_access_token = '9UDH57Zh59W5uTyLB6nbRGiiS9tIyZ';
  private Otherly_access_token = 'yDZkGIbgK4YFTIQnaSHToq7hAbTqx5';
  
  constructor(public http: Http) {


    console.log('Hello OtherlyApiProvider Provider');
    //this.host = 'http://35.160.26.235:8025';
    //this.staging = 'http://staging.other.ly/api/';
    this.staging = 'http://52.27.198.130:8080/api';
    this._Proxy = '/api';

    if (this.Use_proxy == 1) 
      this.URL = this.staging;

    else{
      this.URL = this.staging;
    }

alert("Use_prody: "+ this.Use_proxy + " URL: "+ this.URL);
   
  }


  GetCommunities(access_token, get_options){
    
    console.log('Otherly LDS Get Friends');
    //username = 'carlos';

    //user=normal49437              user wth no friends
    //let post_url = '/friends/?user=carlosumbreon';
    let post_url = '/communities/';
    //?user=carlos42829

    //http://35.160.26.235:8025/api
    //http://staging.other.ly
    let URL = this.URL + post_url;

    if(get_options.search_str !== undefined){
       console.log('URL');
      URL = URL + '&search_str=' + get_options.search_str;
    }
    let token_string = 'token ' + this.Otherly_access_token;

    console.log('OTHERLY token string:' + token_string);
    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );
    console.log
    let options = new RequestOptions ({ headers: header, withCredentials: true});

    return new Promise(resolve => {
      this.http.get(URL,options)
          .map(res => res.json())
          .subscribe(res => {
            var result = [];


            for (let item in res.results){
                result.push({
                   
                   title : res.results[item].title,
                   slug: res.results[item].slug
                
                 });



            }
            

            resolve(result);
          }, err => {
            resolve(err);  
          });

      });
  }

  CreatePost(post_text, accessToken:string){

    
  	let body = {
      subject: 'From Ionic',
      body: post_text
      
    };
    let token_string = 'token ' + this.Otherly_access_token;
    console.log("Create post token: " + accessToken);
  	let post_url = '/posts/';
  	let URL = this.URL + post_url;

  	let header = new Headers;
  	header.append("Accept", 'application/json');
  	header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );
  	let options = new RequestOptions ({ headers: header, withCredentials: true});

  	return new Promise(resolve => {
	  	this.http.post(URL, body, options)
	        .map(res => res.json())
	        .subscribe(res => {
	          resolve(res);
	        }, err => {
	          resolve(err);  
	        });

	    });
  	
  }

  GetPostDetails(access_code, code:string){ 
    
    
    let post_url = '/posts/'+code+'/';
    console.log("URL post detail: " + post_url);
    let URL = this.URL + post_url;


    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    //header.set('Authorization', token_string );

    let options = new RequestOptions ({ headers: header});
    
    return new Promise(resolve => {  
      this.http.get(URL,options)
          .map(res => res.json())
          .subscribe(res => {
            console.log("GET POST DETAILS API " + JSON.stringify(res)); 
            var result = [];                        
            result.push({
              code: res.code,
              replies: res.replies,
              subject: res.subject,
              title: res.title,

            });  

            console.log("GET POST DETAILS API " + JSON.stringify(result));  
            resolve(result);
          }, err => {
            resolve(err);  
          });

      });

  }

  ReplyPost(post_text:string, target:string, accessToken:string){

    
    let body = {
      target_post: target,
      text: post_text
      
    };

    console.log("REPLY POST BODY "+ JSON.stringify(body));
    let token_string = 'token ' + this.Otherly_access_token;
    let post_url = '/posts/reply/';
    let URL = this.URL + post_url;
    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );
    let options = new RequestOptions ({ headers: header, withCredentials: true});

    return new Promise(resolve => {
      this.http.post(URL, body, options)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, err => {
            resolve(err);  
          });

      });
    
  }


    SharePost(post_code:string, dictionary:string, accessToken:string){

    //dictionary = dictionary.replace('"', "");
    console.log('dictionary ' + dictionary);
    let body = {
      post_code: post_code,
      user_dictionary: dictionary
      
    };

    console.log("Share POST BODY "+ JSON.stringify(body));
    let token_string = 'token ' + this.Otherly_access_token;
    let post_url = '/posts/share/';
    let URL = this.URL + post_url;
    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );
    let options = new RequestOptions ({ headers: header, withCredentials: true});

    return new Promise(resolve => {
      this.http.post(URL, body, options)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, err => {
            resolve(err);  
          });

      });
    
  }

    ChangeRating(username, rating, accessToken:string, ){

    
    let body = {
      target_user: username,
      action: "rate",
      value: rating
      
    };
    let token_string = 'token ' + this.Otherly_access_token;
    console.log("Create post token: " + 'HQpMPyiczsVxauytM32Qom2TA2G2fI');
    let post_url = '/friends/modify/';//?target_user='+username+'&action=rate&value=' + rating;
    let URL = this.URL + post_url;// '?target_user='+username+'&action=rate&value=' + rating;

    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );
    let options = new RequestOptions ({ headers: header, withCredentials: true});

    return new Promise(resolve => {
      this.http.put(URL, body, options)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, err => {
            resolve(err);  
          });

      });
    
  }



  GetFriendsList(access_token, get_options){
    console.log('Otherly LDS Get Friends');
    //username = 'carlos';

    //user=normal49437              user wth no friends
    //let post_url = '/friends/?user=carlosumbreon';
    let post_url = '/friends/';
    //?user=carlos42829

    //http://35.160.26.235:8025/api
    //http://staging.other.ly
    let URL = this.URL + post_url;

    if(get_options.search_str !== undefined){
       console.log('URL');
      URL = URL + '&search_str=' + get_options.search_str;
    }
    let token_string = 'token ' + this.Otherly_access_token;

    console.log('OTHERLY token string:' + token_string);
    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );
    console.log
    let options = new RequestOptions ({ headers: header, withCredentials: true});

    return new Promise(resolve => {
      this.http.get(URL,options)
          .map(res => res.json())
          .subscribe(res => {
            
            var result = [];


            for (let item in res.results){

              if (res.results[item].full_name != ""){
                result.push({
                   instance: {
                     username : res.results[item].related_user.username,
                     full_name : res.results[item].full_name,
                     status: res.results[item].related_user.status,
                     photo_url: res.results[item].related_user.photo_url,
                     rating: res.results[item].rating,
                     helps_given: res.results[item].related_user.helps_given,
                     thanks_sent: res.results[item].related_user.thanks_sent,
                     source: 'O'
                   }
                 });

              }

              else {
                result.push({
                   instance: {
                     username : res.results[item].related_user.username,
                     full_name : res.results[item].related_user.first_name + ' ' + res.results[item].related_user.last_name,
                     status: res.results[item].related_user.status,
                     photo_url: res.results[item].related_user.photo_url,
                     rating: res.results[item].rating,
                     helps_given: res.results[item].related_user.helps_given,
                     thanks_sent: res.results[item].related_user.thanks_sent,
                     source: 'O'
                   }
                 });

              }

            }
            

            resolve(result);
          }, err => {
            resolve(err);  
          });

      });
    
  }


  GetOtherlyAccessToken(accessToken:string){

    //let URL = 'http://staging.other.ly/api/login/';
  	let post_url = '/login/';
    let URL = this.URL + post_url;

    
    let body = {
      fb_access_token: accessToken,
      client_id: 'O1nR1EQwIQfCi3UkxRGAQQxu5KTeJaPGZPseJcdc',
      client_secret: '3TIyuiO6tlBK64Regr1aoodebN89gzywya0aQabnQkzHEsWm4EmqCWrIKr6BCcpz63AViAThGH8nm6tV5ImRpai7CIb3wBOQg6REko7JyZ0DLQAmNFRVla6ZJTNdarFb'
    }
alert(accessToken);
    /*let body = {
      fb_access_token: accessToken,
      client_id: 'F0J01mx3juZS48PdMZ3IYPNdGSI37ku4CwEnvOPq',
      client_secret: 'iZgMtOzgYRbFOil7PLTdngbDx6zifZoGIJyaIoZ6FjOEFFJzh7F27KD6H5i82V4St9z4Z2er4DIhTC0lk236vOTIJLKiP7hEtvmopG3dpK66d7iOvphxdW4SoFkiJdnz'
    }*/
    
    let header = new Headers;
    header.append('Content-Type', 'application/json;charset=UTF-8');
    let options = new RequestOptions ({ headers: header});

    console.log('GET OTHERLY TOKEN');
    return new Promise(resolve => {
      this.http.post(URL,body,options)
          .map(res => res.json())
          .subscribe(res => {
             this.Otherly_data = res;
             console.log('Otherly TOKEN:' + this.Otherly_data);
            

            resolve(this.Otherly_data);

            
          }, err => {
            resolve(err);  
          });

      });


  }


//**************************GOOGLE */


GoogleGetOtherlyAccessToken(accessToken:string){
       //alert('Entered into GoogleGetOtherlyAccessToken method');
     let post_url = '/login/';
      let URL = this.URL + post_url; 
      
      let body = {
        google_access_token: accessToken,
        client_id: 'F0J01mx3juZS48PdMZ3IYPNdGSI37ku4CwEnvOPq',
        client_secret: 'iZgMtOzgYRbFOil7PLTdngbDx6zifZoGIJyaIoZ6FjOEFFJzh7F27KD6H5i82V4St9z4Z2er4DIhTC0lk236vOTIJLKiP7hEtvmopG3dpK66d7iOvphxdW4SoFkiJdnz'
      }
      
      let header = new Headers({
        'Content-Type': 'application/json'});

      let options = new RequestOptions ({ headers: header});

      return new Promise(resolve => {
        //alert('Main URL: ' + URL);
        //alert('body prepared: ' +JSON.stringify(body));
        //alert('headers: ' +JSON.stringify(options));
      
        this.http.post(URL,body,options)
            .map(res => res.json())
            .subscribe(res => {
               this.Otherly_data = res;
               //alert('Success: ' + JSON.stringify(this.Otherly_data));            
  
              resolve(this.Otherly_data);

              this.GetGoogleFriendsList(accessToken);

            }, err => {
              //alert("Error: "+ err);
              resolve(err);  
            });
  
        });  
    }

    GetGoogleFriendsList(accessToken){
      //alert('Entered Otherly Get Friends');  
      let body = {
        google_access_token: accessToken,
        client_id: 'F0J01mx3juZS48PdMZ3IYPNdGSI37ku4CwEnvOPq',
        client_secret: 'iZgMtOzgYRbFOil7PLTdngbDx6zifZoGIJyaIoZ6FjOEFFJzh7F27KD6H5i82V4St9z4Z2er4DIhTC0lk236vOTIJLKiP7hEtvmopG3dpK66d7iOvphxdW4SoFkiJdnz'
      };

      //user=normal49437              user wth no friends
      //let post_url = '/friends/?user=carlosumbreon';
      let post_url = '/friends/google-import-contacts/';
      //?user=carlos42829
  
      //http://35.160.26.235:8025/api
      //http://staging.other.ly
      let URL = this.URL + post_url;

      //alert("Full URL: "+ URL);
  
      /*if(get_options.search_str !== undefined){
         console.log('URL');
        URL = URL + '&search_str=' + get_options.search_str;
      }*/

      let token_string = 'token ' + this.Otherly_data.token;
      //alert("OthrlyToken: "+ token_string);
      
      let header = new Headers;
      header.append("Accept", 'application/json');
      header.append('Content-Type', 'application/json;charset=UTF-8');
      header.set('Authorization', token_string );
   
      let options = new RequestOptions ({ headers: header, withCredentials: true});
      //alert("All Options: "+ JSON.stringify(options));
     
      return new Promise(resolve => {
        this.http.post(URL,body, options)
            .map(res => res.json())
            .subscribe(res => {
              alert("Success: "+ JSON.stringify(res));
              var result = [];
    
              for (let item in res.results){  
                if (res.results[item].full_name != ""){
                  result.push({
                     instance: {
                       username : res.results[item].related_user.username,
                       full_name : res.results[item].full_name,
                       status: res.results[item].related_user.status,
                       photo_url: res.results[item].related_user.photo_url,
                       rating: res.results[item].rating,
                       helps_given: res.results[item].related_user.helps_given,
                       thanks_sent: res.results[item].related_user.thanks_sent,
                       source: 'O'
                     }
                   });
  
                }
  
                else {
                  result.push({
                     instance: {
                       username : res.results[item].related_user.username,
                       full_name : res.results[item].related_user.first_name + ' ' + res.results[item].related_user.last_name,
                       status: res.results[item].related_user.status,
                       photo_url: res.results[item].related_user.photo_url,
                       rating: res.results[item].rating,
                       helps_given: res.results[item].related_user.helps_given,
                       thanks_sent: res.results[item].related_user.thanks_sent,
                       source: 'O'
                     }
                   });
  
                }
  
              }             
  
              resolve(result);
            }, err => {
              alert("Error: "+ err);
              resolve(err);  
            });  
        });      
    }
  

//*****************GOOGLE END */


  GetFeedList(access_token, get_options){
    console.log('OtherlyAPI Feed List');

    let post_url = '/posts/feed/';
    
    //http://staging.other.ly
    let URL = this.URL + post_url;

    if(get_options.search_str !== undefined){
       console.log('URL');
      URL = URL + '?target_user=' + get_options.search_str;
    }

    console.log('URL feed '+ URL);
    let token_string = 'token ' + this.Otherly_access_token;

    console.log('OTHERLY token string:' + token_string);
    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );
    console.log
    let options = new RequestOptions ({ headers: header, withCredentials: true});

    return new Promise(resolve => {
      this.http.get(URL,options)
          .map(res => res.json())
          .subscribe(res => {
            var result = [];

          console.log(res.results);
            if (res.count > 0){

	            for (let item in res.results){
	                result.push({
	                   post: {
	                     code : res.results[item].post.code,
	                     subject: res.results[item].post.subject,
	                     text: res.results[item].post.text,
	                     creator: {
                        username : res.results[item].post.creator.username,
	                     	full_name: res.results[item].post.creator.first_name + res.results[item].post.creator.last_name,
	                     	photo_url: res.results[item].post.creator.photo_url
	                     }
	                   }
	                 });

	              

	            }
	        }
            

            resolve(result);
          }, err => {
            resolve(err);  
          });

      });
    
  }


  GetConversations(access_token, get_options){
    
   //http://staging.other.ly
   // let URL = "/api/conversations"; 
   let token_string = 'token ' + this.Otherly_access_token;


   let post_url = '/conversations/';
   
   //http://staging.other.ly
   let URL = this.URL + post_url;


   let header = new Headers;
   header.append("Accept", 'application/json');
   header.append('Content-Type', 'application/json;charset=UTF-8');
   header.set('Authorization', token_string );

   let options = new RequestOptions ({ headers: header, withCredentials: true});
   
       return new Promise(resolve => {  
         this.http.get(URL,options)
             .map(res => res.json())
             .subscribe(res => {
               var result = [];
                console.log(" Results !!!!!!!",res);
   
               if (res.count > 0){

                // for(let item in res.results) {
                //   console.log(" My Items   ", res.results[item].creator.first_name);
                // }

                  for (let item in res.results){
                    let participants = res.results[item].participants;

                    console.log(" Participants ", res.results[item].participants);
                    for(let user in participants){
                      console.log(" userssssss ", participants[user].user.first_name);
                    }
                     

                //   console.log(" conversation api ",item);
                     result.push({
                        post: {
                          code: res.results[item].code,
                          username: res.results[item].creator.username,
                          first_name: res.results[item].creator.first_name,
                          last_name: res.results[item].creator.last_name,
                          conversation_created: res.results[item].created,
                          title: res.results[item].title,
                          participants:res.results[item].participants

                        }
                      });
   
                   
   
                  }
             }
               
   
               resolve(result );
             }, err => {
               resolve(err);  
             });
   
         });
             
    }


     GetConversationDetails(code:string){
      console.log( " GetConversationDetails Code ", code);    
            //http://staging.other.ly
     // let URL = "/api/conversations"; 
      let token_string = 'token ' + this.Otherly_access_token;
      
      
      let post_url = '/conversations/'+code+'/';
      
      //http://staging.other.ly
      let URL = this.URL + post_url;
  

      let header = new Headers;
      header.append("Accept", 'application/json');
      header.append('Content-Type', 'application/json;charset=UTF-8');
      header.set('Authorization', token_string );

      let options = new RequestOptions ({ headers: header, withCredentials: true});
      
      return new Promise(resolve => {  
        this.http.get(URL,options)
            .map(res => res.json())
            .subscribe(res => {
              var result = [];                        
              result.push({
                code: res.code,
                replies:res.replies,
                title: res.title,
                creator: res.creator 
              });    
              resolve(result);
            }, err => {
              resolve(err);  
            });
  
        });
  
    }


    ReplyConversation(reply:string, code:string){

    console.log("get reply conversation",reply," Code ", code);

    let token_string = 'token ' + 'tRzxPEL5squiJlzFxm6GxGy1ZghroY';
    
    let body = {
      message: reply,
      conversation: code
    };
    
    let post_url = '/conversations/replies/';
    
    // //http://staging.other.ly
    let URL = this.URL + post_url;


    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );

    let options = new RequestOptions ({ headers: header, withCredentials: true});

    return new Promise(resolve => {
      this.http.post(URL, body, options)
          .map(res => res.json())
          .subscribe(res => {

            console.log( " Reply!!!!", res);
            resolve(res);
          }, err => {
            resolve(err);  
          });

      });
  }



  CreateConversation(usersSelected, subject){


  // console.log(" PRomisee...............",JSON.stringify(usersSelected), " subject ", subject);

  

    let users : string;
    let item_left: number;
    item_left = usersSelected.length;
    users = "{"
    for (let info of usersSelected){
      
      users += '"'+info+'": true';
      item_left = item_left - 1;
      if(item_left != 0 ){
        users += ",";
      }

    }
    users += "}";

    console.log( " Users ... !!!! ",users );
    
    let body = {
      user_dictionary: users,
      subject: subject
    };
    
    let post_url = '/conversations/';
    
    // //http://staging.other.ly
    let URL = this.URL + post_url;

    let token_string = 'token ' + this.Otherly_access_token;

    let header = new Headers;
    header.append("Accept", 'application/json');
    header.append('Content-Type', 'application/json;charset=UTF-8');
    header.set('Authorization', token_string );

    let options = new RequestOptions ({ headers: header, withCredentials: true});

    return new Promise(resolve => {
      this.http.post(URL, body, options)
          .map(res => res.json())
          .subscribe(res => {

            console.log( " Reply!!!!", res);
            resolve(res);
          }, err => {
            resolve(err);  
          });
      });

  }


}
