webpackJsonp([5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_conversations_create_conversation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_conversations_conversation_details__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//provider




/**
 * Generated class for the ConversationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConversationsPage = (function () {
    function ConversationsPage(OtherlyAPI, Lds, navCtrl) {
        var _this = this;
        this.OtherlyAPI = OtherlyAPI;
        this.Lds = Lds;
        this.navCtrl = navCtrl;
        this.OtherlyAPI.GetConversations('', {})
            .then(function (data) {
            _this.Conversations = data;
            var conversationTemp = JSON.stringify(data);
            var numU = [];
            numU.push(_this.Conversations);
        });
    }
    ConversationsPage.prototype.new_talk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_conversations_create_conversation__["a" /* CreateConversationPage */]);
    };
    ConversationsPage.prototype.showConversationDetails = function (code) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_conversations_conversation_details__["a" /* ConversationDetailsPage */], { conv_code: code });
    };
    ConversationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conversations',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\conversations\conversations.html"*/'<!--\n  Generated template for the ConversationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-item>\n      <ion-input [(ngModel)]="search_conversation_list" (keyup.enter)="SearchConversationList()" placeholder="Search" >\n      </ion-input>\n  </ion-item>\n  <ion-row>\n    <ion-col col-6>\n      <div padding>\n        <b>Conversations</b>\n      </div>\n    </ion-col>\n  \n    <ion-col col-6>\n      <div padding >\n        <button (click)="new_talk()">\n            New Talk\n        </button>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-list class="ion-list" >\n\n        <!-- LOOP WITH THE Conversation LIST -->\n        \n        <ion-item *ngFor="let list of Conversations; let i=index" >\n          <ion-row >\n           \n          </ion-row>\n    \n        <ion-row>\n            <ion-col col-2>\n                <img  src="assets/img/avatar_small.png" /> \n              </ion-col>\n\n          <ion-col col-4 class="two_chars" (click)="showConversationDetails(list.post.code)">\n              <ion-row><div  *ngIf="list.post.title; else show_name">{{list.post.title}}</div>  <ng-template #show_name>{{list.post.first_name}} </ng-template></ion-row>\n              <ion-row>  {{list.post.first_name}} {{list.post.last_name}} </ion-row>\n          </ion-col>\n          \n          \n    \n       \n        </ion-row>\n    \n        \n        <!-- END OF LOOP -->\n        </ion-item>\n       \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\conversations\conversations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__["a" /* LocaldataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ConversationsPage);
    return ConversationsPage;
}());

//# sourceMappingURL=conversations.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeFeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_post_detail_post_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_share_popover_share_popover__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//provider



//COMPONENTS

/**
 * Generated class for the HomeFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeFeedPage = (function () {
    function HomeFeedPage(navCtrl, navParams, OtherlyAPI, Lds, toastCtrl, alertCtrl, PopOverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.OtherlyAPI = OtherlyAPI;
        this.Lds = Lds;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.PopOverCtrl = PopOverCtrl;
        this.radio_array = [];
        this.list = [];
        var List;
        this.Lds.getUser().then(function (data) {
            _this.UserData = data;
            //USER INFORMATIONS HAVE BEEN RECEIVED HERE
            _this.OtherlyAPI.GetFeedList(_this.UserData.otherly_token, {})
                .then(function (data) {
                _this.Feeds = data;
                console.log("Feed DATA: " + JSON.stringify(_this.Feeds));
            });
            _this.OtherlyAPI.GetFriendsList(_this.UserData.otherly_token, {})
                .then(function (data) {
                _this.API_List = data;
                //console.log("Friends page USER DATA: " + JSON.stringify(this.API_List))
                //if(this.API_List.length >= 2){
                for (var item in _this.API_List)
                    _this.list.push(_this.API_List[item]);
                List = _this.list.sort(function (a, b) {
                    if (a.instance.full_name < b.instance.full_name)
                        return -1;
                    if (a.instance.full_name > b.instance.full_name)
                        return 1;
                    return 0;
                });
                for (var _i = 0, List_1 = List; _i < List_1.length; _i++) {
                    var item = List_1[_i];
                    console.log("username : " + item.instance.username);
                    _this.radio_array.push({
                        label: item.instance.full_name,
                        type: 'checkbox',
                        value: item.instance.username,
                        name: item.instance.full_name
                    });
                }
            });
        });
    }
    HomeFeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeFeedPage');
    };
    HomeFeedPage.prototype.createPost = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Post Created Successfully',
            duration: 3000,
            position: 'top'
        });
        console.log("post text: " + this.post_text);
        if (this.post_text != "") {
            this.OtherlyAPI.CreatePost(this.post_text, this.UserData.otherly_token).then(function (res) {
                console.log(res);
                toast.present();
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                _this.post_text = "";
            });
        }
    };
    HomeFeedPage.prototype.ReplyPrompt = function (Post_detail) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Post Replied Successfully',
            duration: 3000,
            position: 'top'
        });
        console.log("post " + JSON.stringify(Post_detail));
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        _this.OtherlyAPI.ReplyPost(data.comment, data.code, _this.UserData.otherly_token).then(function (res) {
                            console.log("Replied data" + JSON.stringify(res));
                            toast.present();
                        });
                        console.log('Save clicked ' + JSON.stringify(data));
                    }
                }
            ]
        });
        prompt.present();
    };
    HomeFeedPage.prototype.OpenPost = function (Post_detail) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_post_detail_post_detail__["a" /* PostDetailPage */], { code: Post_detail.code });
    };
    HomeFeedPage.prototype.SharePrompt = function (Post_detail) {
        var Popover = this.PopOverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_share_popover_share_popover__["a" /* SharePopoverComponent */], { post_details: Post_detail });
        Popover.present();
    };
    HomeFeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-feed',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\home-feed\home-feed.html"*/'<!--\n  Generated template for the HomeFeedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n	<ion-row class="post" ion-fixed>\n\n    \n      <ion-col col-3 class="user-info" *ngIf="UserData.picture != \'\'">\n        <img  src="{{ UserData.picture }}" />\n      </ion-col>\n      <ion-col col-3 class="user-info" *ngIf="UserData.picture == \'\'">\n          <img  src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-9 >\n        <ion-col col-12 class="user-infos" *ngIf="UserData">{{ UserData.first_name }} {{ UserData.last_name }}</ion-col>\n          <ion-col col-12 class="post-text">\n            \n              <textarea [(ngModel)]="post_text" placeholder="Post something here..." >\n              </textarea>\n           \n          </ion-col>\n      </ion-col>\n    \n    \n      <ion-col col-6 class="share-button" >\n        <button icon-left >\n          <ion-icon name="share"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 class="post-buttom" >\n        \n        <button end (click)="createPost()">Post</button>\n     \n      </ion-col>\n    \n\n    \n  </ion-row>\n\n\n  <ion-list class="ion-cards"  *ngIf="quantity != 0 && !add_friends">\n\n    <!-- LOOP WITH THE FRIENDS LIST -->\n    \n    <ion-card *ngFor="let feed of Feeds" >\n\n      <ion-row >\n\n        <ion-col class="user-picture" col-2 >\n          <img *ngIf="feed.post.creator.photo_url == \'\' || feed.post.creator.photo_url == undefined" src="assets/img/avatar_small.png" />\n          <img *ngIf="feed.post.creator.photo_url != undefined"  src=\'{{feed.post.creator.photo_url}}\' />\n        </ion-col>\n        \n        <ion-col col-9>\n          <ion-card-header text-wrap>\n            {{feed.post.subject}}\n          </ion-card-header>\n\n          <ion-card-content text-wrap>\n            {{feed.post.text}}\n          </ion-card-content>\n        </ion-col>\n\n        <ion-col col-1>\n          <ion-icon name="flag"></ion-icon>\n        </ion-col>\n\n       \n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <button (click)="SharePrompt({post:feed})" ion-button icon-left clear small>\n            <ion-icon name="share"></ion-icon>\n          \n          </button>\n        </ion-col>\n\n        <ion-col col-7>\n          <button (click)="ReplyPrompt({code:feed.post.code, text:feed.post.text})" ion-button icon-left clear small>\n            <ion-icon name="clipboard"></ion-icon>\n          \n          </button>\n\n          <button ion-button icon-center clear small (click)="OpenPost({code:feed.post.code})">\n            <ion-icon name="people"></ion-icon>\n          \n          </button>\n\n          <button ion-button icon-right clear small>\n            <ion-icon name="redo"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n        \n    </ion-card>\n\n    \n    <!-- END OF LOOP -->\n  </ion-list>\n  {{this.userdata | json}}\n  {{userdata | json}}\n</ion-content>\n{{this.userdata | json}}\n{{userdata | json}}'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\home-feed\home-feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
    ], HomeFeedPage);
    return HomeFeedPage;
}());

//# sourceMappingURL=home-feed.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//provider


/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostDetailPage = (function () {
    function PostDetailPage(navCtrl, navParams, Lds, OtherlyAPI) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Lds = Lds;
        this.OtherlyAPI = OtherlyAPI;
        this.Details = [];
        this.PostCode = this.navParams.get('code');
        this.Lds.getUser().then(function (data) {
            _this.UserData = data;
        });
        this.OtherlyAPI.GetPostDetails('', this.PostCode).then(function (data) {
            _this.PostDetails = data;
            for (var item in _this.PostDetails) {
                for (var reply in _this.PostDetails[item].replies)
                    _this.Details.push(_this.PostDetails[item].replies[reply]);
            }
            console.log("REPLY DETAILS " + JSON.stringify(_this.Details));
        });
    }
    PostDetailPage.prototype.ionViewWillLoad = function () {
        console.log('Is Loading PostDetailPage ' + this.PostCode);
    };
    PostDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-detail',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\post-detail\post-detail.html"*/'<!--\n  Generated template for the PostDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hide-tabs>   \n    <ion-title class="page-title"><ion-icon name="back" class="icon-back"></ion-icon></ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-row class="comment-area" ion-fixed>\n		<ion-card class="comment" >\n\n	    <ion-row>\n		      <ion-col col-3 class="user-info" *ngIf="UserData.picture != \'\'">\n		        <img  src="{{ UserData.picture }}" />\n		      </ion-col>\n		      <ion-col col-3 class="user-info" *ngIf="UserData.picture == \'\'">\n		          <img  src="assets/img/avatar_small.png" />\n		      </ion-col>\n\n		      <ion-col col-9 >\n		        <ion-col col-12 class="user-infos" *ngIf="UserData">{{ UserData.first_name }} {{ UserData.last_name }}</ion-col>\n		          <ion-col col-12 class="post-text">\n		            \n		              <textarea [(ngModel)]="post_text" placeholder="Write what you are looking for or what you are offering..." >\n		              </textarea>\n		           \n		          </ion-col>\n		      </ion-col>\n		  </ion-row>\n	    \n	    \n	      <ion-col col-6 class="share-button" >\n	        <button icon-left >\n	          <ion-icon name="share"></ion-icon>\n	        </button>\n	      </ion-col>\n	      <ion-col col-6 class="post-buttom">\n	        \n	        <button end (click)="createPost()">Comment</button>\n	     \n	      </ion-col>\n	    \n\n	    \n	  </ion-card>\n	</ion-row>\n\n\n\n  <ion-list class="replies" *ngIf="Details">\n\n    <!-- LOOP WITH THE FRIENDS LIST -->\n    \n    <ion-item *ngFor="let detail of Details" >\n\n    \n      <ion-row >\n\n        \n          \n        <ion-col class="user-picture" col-2 >\n          <img *ngIf="detail.creator.photo_url == \'\' || detail.creator.photo_url == undefined" src="assets/img/avatar_small.png" />\n          <img *ngIf="detail.creator.photo_url != undefined"  src=\'{{detail.creator.photo_url}}\' />\n        </ion-col>\n        \n        <ion-col col-9>\n          <ion-card-header text-wrap>\n            {{detail.creator.first_name}} {{detail.creator.last_name}}\n          </ion-card-header>\n\n           <ion-col col-1>\n         	{{detail.text}}\n       	 	</ion-col>\n\n        </ion-col>\n\n        <ion-col col-1>\n          <ion-icon name="star"></ion-icon>\n        </ion-col>\n        \n\n       \n      </ion-row>\n      \n\n        \n    </ion-item>\n\n    \n    <!-- END OF LOOP -->\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\post-detail\post-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]])
    ], PostDetailPage);
    return PostDetailPage;
}());

//# sourceMappingURL=post-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_more_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MorePage = (function () {
    function MorePage(navCtrl, navParams, inAppB, Lds, FacebookCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppB = inAppB;
        this.Lds = Lds;
        this.FacebookCtrl = FacebookCtrl;
        //this.goto('other.ly/more');
        this.Lds.getUser()
            .then(function (data) {
            _this.UserData = data;
        });
    }
    MorePage.prototype.myState = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_more_home__["a" /* HomePage */]);
    };
    MorePage.prototype.logout = function () {
        var _this = this;
        this.FacebookCtrl.logout().then(function (res) {
            if (res == 'OK') {
                console.log('Otherly logout ');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            }
        });
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\more\more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n	<ion-row class="infos" padding (click)="myState()">\n	    <ion-col col-3 class="user-info" *ngIf="UserData.picture != \'\'">\n	      	<img src="{{ UserData.picture }}" />\n	    </ion-col>\n	    <ion-col col-3 class="user-info" *ngIf="UserData.picture == \'\'">\n	        <img src="assets/img/avatar_small.png" />\n	    </ion-col>\n\n	    <ion-col col-9 class="user-name" *ngIf="UserData">\n	      {{ UserData.first_name }} {{ UserData.last_name }}\n	    </ion-col>\n	</ion-row>\n\n	<ion-row class="lightgray">\n		Communities\n	</ion-row>\n	<ion-row class="item">\n		<ion-icon name="add"></ion-icon>\n		Create new community\n	</ion-row>\n	<ion-row class="item">\n		<ion-icon name="people"></ion-icon>\n		Hiking in Vancouver\n	</ion-row>\n	<ion-row class="item">\n		<ion-icon name="people"></ion-icon>\n		Tech & Startups\n	</ion-row>\n	<ion-row class="lightgray">\n		Thanks\n	</ion-row>\n	<ion-row class="item">\n		<ion-icon name="add"></ion-icon>\n		Greetings cards\n	</ion-row>\n\n	<ion-row class="lightgray">\n		Personal\n	</ion-row>\n	<ion-row class="item">\n		<ion-icon name="contact"></ion-icon>\n		About me\n	</ion-row>\n	<ion-row class="item" (click)="logout()">\n		<ion-icon name="exit"></ion-icon>\n		Logout\n	</ion-row>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, inAppB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppB = inAppB;
        this.goto('other.ly/notifications');
    }
    NotificationsPage.prototype.goto = function (params) {
        var browser = this.inAppB.create("http://" + params + "", '_self', { location: 'no' });
        // window.open("http://" + params+"" , '_self');
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\notifications\notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaldataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LocaldataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LocaldataProvider = (function () {
    function LocaldataProvider(http) {
        this.http = http;
        this.UserData = {};
        console.log('Hello LocaldataProvider Provider');
        this.UserData = {
            email: '',
            first_name: '',
            last_name: '',
            picture: '',
            user_name: ''
        };
    }
    LocaldataProvider.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var res = _this.UserData;
            return resolve(res);
        });
    };
    LocaldataProvider.prototype.setUser = function (user, Otherly_data) {
        var _this = this;
        return new Promise(function (resolve) {
            //console.log('LocalData Otherly token: ' + Token )	
            _this.UserData = {
                otherly_token: Otherly_data.token,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                picture: user.picture,
                user_name: user.user_name,
                thanks_sent: Otherly_data.user.thanks_sent,
                helps_given: Otherly_data.user.helps_given,
                date_joined: Otherly_data.user.date_joined
            };
            console.log("SET USER:" + JSON.stringify(_this.UserData));
        });
    };
    LocaldataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LocaldataProvider);
    return LocaldataProvider;
}());

//# sourceMappingURL=localdata.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherlyApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Device } from '@ionic-native/device';



/*
  Generated class for the OtherlyApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.

*/
var OtherlyApiProvider = (function () {
    function OtherlyApiProvider(http) {
        this.http = http;
        this.Use_proxy = 1;
        //private Otherly_access_token = 'ExUE4B0YfLHU1Mw5X3xGKrErnNpg4l';
        //private Otherly_access_token = '9UDH57Zh59W5uTyLB6nbRGiiS9tIyZ';
        this.Otherly_access_token = 'yDZkGIbgK4YFTIQnaSHToq7hAbTqx5';
        console.log('Hello OtherlyApiProvider Provider');
        //this.host = 'http://35.160.26.235:8025';
        //this.staging = 'http://staging.other.ly/api/';
        this.staging = 'http://52.27.198.130:8080/api';
        this._Proxy = '/api';
        if (this.Use_proxy == 1)
            this.URL = this.staging;
        else {
            this.URL = this.staging;
        }
        alert("Use_prody: " + this.Use_proxy + " URL: " + this.URL);
    }
    OtherlyApiProvider.prototype.GetCommunities = function (access_token, get_options) {
        var _this = this;
        console.log('Otherly LDS Get Friends');
        //username = 'carlos';
        //user=normal49437              user wth no friends
        //let post_url = '/friends/?user=carlosumbreon';
        var post_url = '/communities/';
        //?user=carlos42829
        //http://35.160.26.235:8025/api
        //http://staging.other.ly
        var URL = this.URL + post_url;
        if (get_options.search_str !== undefined) {
            console.log('URL');
            URL = URL + '&search_str=' + get_options.search_str;
        }
        var token_string = 'token ' + this.Otherly_access_token;
        console.log('OTHERLY token string:' + token_string);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        console.log;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.get(URL, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                var result = [];
                for (var item in res.results) {
                    result.push({
                        title: res.results[item].title,
                        slug: res.results[item].slug
                    });
                }
                resolve(result);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.CreatePost = function (post_text, accessToken) {
        var _this = this;
        var body = {
            subject: 'From Ionic',
            body: post_text
        };
        var token_string = 'token ' + this.Otherly_access_token;
        console.log("Create post token: " + accessToken);
        var post_url = '/posts/';
        var URL = this.URL + post_url;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.GetPostDetails = function (access_code, code) {
        var _this = this;
        var post_url = '/posts/' + code + '/';
        console.log("URL post detail: " + post_url);
        var URL = this.URL + post_url;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        //header.set('Authorization', token_string );
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve) {
            _this.http.get(URL, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
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
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.ReplyPost = function (post_text, target, accessToken) {
        var _this = this;
        var body = {
            target_post: target,
            text: post_text
        };
        console.log("REPLY POST BODY " + JSON.stringify(body));
        var token_string = 'token ' + this.Otherly_access_token;
        var post_url = '/posts/reply/';
        var URL = this.URL + post_url;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.SharePost = function (post_code, dictionary, accessToken) {
        var _this = this;
        //dictionary = dictionary.replace('"', "");
        console.log('dictionary ' + dictionary);
        var body = {
            post_code: post_code,
            user_dictionary: dictionary
        };
        console.log("Share POST BODY " + JSON.stringify(body));
        var token_string = 'token ' + this.Otherly_access_token;
        var post_url = '/posts/share/';
        var URL = this.URL + post_url;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.ChangeRating = function (username, rating, accessToken) {
        var _this = this;
        var body = {
            target_user: username,
            action: "rate",
            value: rating
        };
        var token_string = 'token ' + this.Otherly_access_token;
        console.log("Create post token: " + 'HQpMPyiczsVxauytM32Qom2TA2G2fI');
        var post_url = '/friends/modify/'; //?target_user='+username+'&action=rate&value=' + rating;
        var URL = this.URL + post_url; // '?target_user='+username+'&action=rate&value=' + rating;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.put(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.GetFriendsList = function (access_token, get_options) {
        var _this = this;
        console.log('Otherly LDS Get Friends');
        //username = 'carlos';
        //user=normal49437              user wth no friends
        //let post_url = '/friends/?user=carlosumbreon';
        var post_url = '/friends/';
        //?user=carlos42829
        //http://35.160.26.235:8025/api
        //http://staging.other.ly
        var URL = this.URL + post_url;
        if (get_options.search_str !== undefined) {
            console.log('URL');
            URL = URL + '&search_str=' + get_options.search_str;
        }
        var token_string = 'token ' + this.Otherly_access_token;
        console.log('OTHERLY token string:' + token_string);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        console.log;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.get(URL, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                var result = [];
                for (var item in res.results) {
                    if (res.results[item].full_name != "") {
                        result.push({
                            instance: {
                                username: res.results[item].related_user.username,
                                full_name: res.results[item].full_name,
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
                                username: res.results[item].related_user.username,
                                full_name: res.results[item].related_user.first_name + ' ' + res.results[item].related_user.last_name,
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
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.GetOtherlyAccessToken = function (accessToken) {
        var _this = this;
        //let URL = 'http://staging.other.ly/api/login/';
        var post_url = '/login/';
        var URL = this.URL + post_url;
        var body = {
            fb_access_token: accessToken,
            client_id: 'O1nR1EQwIQfCi3UkxRGAQQxu5KTeJaPGZPseJcdc',
            client_secret: '3TIyuiO6tlBK64Regr1aoodebN89gzywya0aQabnQkzHEsWm4EmqCWrIKr6BCcpz63AViAThGH8nm6tV5ImRpai7CIb3wBOQg6REko7JyZ0DLQAmNFRVla6ZJTNdarFb'
        };
        alert(accessToken);
        /*let body = {
          fb_access_token: accessToken,
          client_id: 'F0J01mx3juZS48PdMZ3IYPNdGSI37ku4CwEnvOPq',
          client_secret: 'iZgMtOzgYRbFOil7PLTdngbDx6zifZoGIJyaIoZ6FjOEFFJzh7F27KD6H5i82V4St9z4Z2er4DIhTC0lk236vOTIJLKiP7hEtvmopG3dpK66d7iOvphxdW4SoFkiJdnz'
        }*/
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json;charset=UTF-8');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        console.log('GET OTHERLY TOKEN');
        return new Promise(function (resolve) {
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.Otherly_data = res;
                console.log('Otherly TOKEN:' + _this.Otherly_data);
                resolve(_this.Otherly_data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    //**************************GOOGLE */
    OtherlyApiProvider.prototype.GoogleGetOtherlyAccessToken = function (accessToken) {
        var _this = this;
        //let URL = 'http://staging.other.ly/api/login/';
        var post_url = '/login/';
        var URL = this.URL + post_url;
        var body = {
            google_access_token: accessToken,
            client_id: 'F0J01mx3juZS48PdMZ3IYPNdGSI37ku4CwEnvOPq',
            client_secret: 'iZgMtOzgYRbFOil7PLTdngbDx6zifZoGIJyaIoZ6FjOEFFJzh7F27KD6H5i82V4St9z4Z2er4DIhTC0lk236vOTIJLKiP7hEtvmopG3dpK66d7iOvphxdW4SoFkiJdnz'
        };
        /*let body = {
          fb_access_token: accessToken,
          client_id: 'F0J01mx3juZS48PdMZ3IYPNdGSI37ku4CwEnvOPq',
          client_secret: 'iZgMtOzgYRbFOil7PLTdngbDx6zifZoGIJyaIoZ6FjOEFFJzh7F27KD6H5i82V4St9z4Z2er4DIhTC0lk236vOTIJLKiP7hEtvmopG3dpK66d7iOvphxdW4SoFkiJdnz'
        }*/
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        /* headers : {"method:":"post", "headers": {"Cotent-Type":["application/json"]}, "body":"null", "url":null,"withCredentials":null,"responseType":null}*/
        //alert('Entered into GetOtherlyToken method');
        return new Promise(function (resolve) {
            //alert('Main URL: ' + URL);
            //alert('body prepared: ' +JSON.stringify(body));
            //alert('headers: ' +JSON.stringify(options));
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.Otherly_data = res;
                //alert('Success: ' + JSON.stringify(this.Otherly_data));            
                resolve(_this.Otherly_data);
                _this.GetGoogleFriendsList(accessToken);
            }, function (err) {
                alert("Error: " + err);
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.GetGoogleFriendsList = function (accessToken) {
        var _this = this;
        alert('Entered Otherly Get Friends');
        //username = 'carlos';
        var body = {
            google_access_token: accessToken,
            client_id: 'F0J01mx3juZS48PdMZ3IYPNdGSI37ku4CwEnvOPq',
            client_secret: 'iZgMtOzgYRbFOil7PLTdngbDx6zifZoGIJyaIoZ6FjOEFFJzh7F27KD6H5i82V4St9z4Z2er4DIhTC0lk236vOTIJLKiP7hEtvmopG3dpK66d7iOvphxdW4SoFkiJdnz'
        };
        //user=normal49437              user wth no friends
        //let post_url = '/friends/?user=carlosumbreon';
        var post_url = '/friends/google-import-contacts/';
        //?user=carlos42829
        //http://35.160.26.235:8025/api
        //http://staging.other.ly
        var URL = this.URL + post_url;
        //alert("Full URL: "+ URL);
        /*if(get_options.search_str !== undefined){
           console.log('URL');
          URL = URL + '&search_str=' + get_options.search_str;
        }*/
        URL = URL + '?search_str=all';
        var token_string = 'token ' + this.Otherly_data.token;
        alert("OthrlyToken: " + token_string);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        alert("All Options: " + JSON.stringify(options));
        return new Promise(function (resolve) {
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                alert("Success: " + JSON.stringify(res));
                var result = [];
                for (var item in res.results) {
                    if (res.results[item].full_name != "") {
                        result.push({
                            instance: {
                                username: res.results[item].related_user.username,
                                full_name: res.results[item].full_name,
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
                                username: res.results[item].related_user.username,
                                full_name: res.results[item].related_user.first_name + ' ' + res.results[item].related_user.last_name,
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
            }, function (err) {
                alert("Error: " + err);
                resolve(err);
            });
        });
    };
    //*****************GOOGLE END */
    OtherlyApiProvider.prototype.GetFeedList = function (access_token, get_options) {
        var _this = this;
        console.log('OtherlyAPI Feed List');
        var post_url = '/posts/feed/';
        //http://staging.other.ly
        var URL = this.URL + post_url;
        if (get_options.search_str !== undefined) {
            console.log('URL');
            URL = URL + '?target_user=' + get_options.search_str;
        }
        console.log('URL feed ' + URL);
        var token_string = 'token ' + this.Otherly_access_token;
        console.log('OTHERLY token string:' + token_string);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        console.log;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.get(URL, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                var result = [];
                console.log(res.results);
                if (res.count > 0) {
                    for (var item in res.results) {
                        result.push({
                            post: {
                                code: res.results[item].post.code,
                                subject: res.results[item].post.subject,
                                text: res.results[item].post.text,
                                creator: {
                                    username: res.results[item].post.creator.username,
                                    full_name: res.results[item].post.creator.first_name + res.results[item].post.creator.last_name,
                                    photo_url: res.results[item].post.creator.photo_url
                                }
                            }
                        });
                    }
                }
                resolve(result);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.GetConversations = function (access_token, get_options) {
        var _this = this;
        //http://staging.other.ly
        // let URL = "/api/conversations"; 
        var token_string = 'token ' + this.Otherly_access_token;
        var post_url = '/conversations/';
        //http://staging.other.ly
        var URL = this.URL + post_url;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.get(URL, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                var result = [];
                console.log(" Results !!!!!!!", res);
                if (res.count > 0) {
                    // for(let item in res.results) {
                    //   console.log(" My Items   ", res.results[item].creator.first_name);
                    // }
                    for (var item in res.results) {
                        var participants = res.results[item].participants;
                        console.log(" Participants ", res.results[item].participants);
                        for (var user in participants) {
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
                                participants: res.results[item].participants
                            }
                        });
                    }
                }
                resolve(result);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.GetConversationDetails = function (code) {
        var _this = this;
        console.log(" GetConversationDetails Code ", code);
        //http://staging.other.ly
        // let URL = "/api/conversations"; 
        var token_string = 'token ' + this.Otherly_access_token;
        var post_url = '/conversations/' + code + '/';
        //http://staging.other.ly
        var URL = this.URL + post_url;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.get(URL, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                var result = [];
                result.push({
                    code: res.code,
                    replies: res.replies,
                    title: res.title,
                    creator: res.creator
                });
                resolve(result);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.ReplyConversation = function (reply, code) {
        var _this = this;
        console.log("get reply conversation", reply, " Code ", code);
        var token_string = 'token ' + 'tRzxPEL5squiJlzFxm6GxGy1ZghroY';
        var body = {
            message: reply,
            conversation: code
        };
        var post_url = '/conversations/replies/';
        // //http://staging.other.ly
        var URL = this.URL + post_url;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log(" Reply!!!!", res);
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider.prototype.CreateConversation = function (usersSelected, subject) {
        // console.log(" PRomisee...............",JSON.stringify(usersSelected), " subject ", subject);
        var _this = this;
        var users;
        var item_left;
        item_left = usersSelected.length;
        users = "{";
        for (var _i = 0, usersSelected_1 = usersSelected; _i < usersSelected_1.length; _i++) {
            var info = usersSelected_1[_i];
            users += '"' + info + '": true';
            item_left = item_left - 1;
            if (item_left != 0) {
                users += ",";
            }
        }
        users += "}";
        console.log(" Users ... !!!! ", users);
        var body = {
            user_dictionary: users,
            subject: subject
        };
        var post_url = '/conversations/';
        // //http://staging.other.ly
        var URL = this.URL + post_url;
        var token_string = 'token ' + this.Otherly_access_token;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append("Accept", 'application/json');
        header.append('Content-Type', 'application/json;charset=UTF-8');
        header.set('Authorization', token_string);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header, withCredentials: true });
        return new Promise(function (resolve) {
            _this.http.post(URL, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log(" Reply!!!!", res);
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
    };
    OtherlyApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OtherlyApiProvider);
    return OtherlyApiProvider;
}());

//# sourceMappingURL=otherly-api.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/conversations/conversations.module": [
		299,
		4
	],
	"../pages/home-feed/home-feed.module": [
		300,
		3
	],
	"../pages/more/more.module": [
		301,
		2
	],
	"../pages/notifications/notifications.module": [
		302,
		1
	],
	"../pages/post-detail/post-detail.module": [
		303,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_friends_change_rate_popover__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_conversations_create_conversation_new__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//provider


//NATIVE FEATURES


//PAGES


/**
 * Generated class for the CreateConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateConversationPage = (function () {
    function CreateConversationPage(navCtrl, navParams, inAppB, platform, contact, OtherlyAPI, Lds, events, app, PopOverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppB = inAppB;
        this.platform = platform;
        this.contact = contact;
        this.OtherlyAPI = OtherlyAPI;
        this.Lds = Lds;
        this.events = events;
        this.app = app;
        this.PopOverCtrl = PopOverCtrl;
        this.List = [];
        this.list = [];
        this.mobile_contact = [];
        this.add_friends = false;
        this.search = -2;
        this.usersSelected = [];
        this.platform.ready().then(function () {
            var opts = {
                filter: "M",
                multiple: true,
                hasPhoneNumber: true,
                fields: ['displayName', 'name']
            };
            contact.find(['displayName', 'name'], opts).then(function (contacts) {
                _this.contactlist = contacts;
                _this.MobileContactsinArray();
                //console.log("contact list: " + JSON.stringify(this.contactlist));
            }, function (error) {
                console.log(error);
            });
        });
        this.Lds.getUser().then(function (data) {
            _this.UserData = data;
            //USER INFORMATIONS HAVE BEEN RECEIVED HERE
            _this.OtherlyAPI.GetFriendsList(_this.UserData.otherly_token, {})
                .then(function (data) {
                _this.API_List = data;
                console.log("Friends page USER DATA: " + JSON.stringify(_this.API_List));
                //if(this.API_List.length >= 2){
                for (var item in _this.API_List)
                    _this.list.push(_this.API_List[item]);
                _this.List = _this.list.sort(function (a, b) {
                    if (a.instance.full_name < b.instance.full_name)
                        return -1;
                    if (a.instance.full_name > b.instance.full_name)
                        return 1;
                    return 0;
                });
                //}
                /*else {
                  for (let item in this.API_List)
                    this.List.push(this.API_List[item])
     
                }*/
                //console.log('LIST O & M: ' + JSON.stringify(this.List));
                _this.quantity = _this.List.length;
                console.log('LIST O & M: ' + JSON.stringify(_this.List));
            });
        });
    }
    CreateConversationPage.prototype.MobileContactsinArray = function () {
        for (var item in this.contactlist) {
            this.list.push({
                instance: {
                    full_name: this.contactlist[item].displayName,
                    photo_url: '',
                    mobile_number: this.contactlist[item].phoneNumbers[0].value,
                    rating: '',
                    helps_given: '',
                    source: 'M'
                }
            });
        }
    };
    CreateConversationPage.prototype.ionSelected = function () {
        console.log("Friends has been selected");
        this.add_friends = false;
        console.log(this.add_friends);
    };
    CreateConversationPage.prototype.goto = function (params) {
        //const browser = this.inAppB.create("http://" + params+"" , '_self',{location:'yes'});
    };
    CreateConversationPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.List.push(_this.List.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    CreateConversationPage.prototype.changeRating = function (username, rating) {
        var _this = this;
        console.log('Change ' + rating);
        var popover = this.PopOverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_friends_change_rate_popover__["a" /* ChangeRatePopoverPage */], { username: username, rate: rating }, {});
        popover.present();
        Object.keys(this.List).forEach(function (key) {
            if (_this.List[key].instance.username == username) {
                if (_this.List[key].instance.rating == rating)
                    _this.List[key].instance.rating = 0;
                else {
                    _this.List[key].instance.rating = rating;
                }
            }
        });
        for (var _i = 0, _a = this.List; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.instance.username == username) {
                console.log('Found: ' + item.instance.username);
            }
        }
    };
    CreateConversationPage.prototype.Search = function () {
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
        for (var item in this.list) {
            if (this.list[item].indexOf(this.search_friend) >= 0) {
                console.log('Found: ' + this.list[item].full_name);
            }
        }
    };
    CreateConversationPage.prototype.Show_Add_friends = function () {
        this.add_friends = !this.add_friends;
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad CreateConversationPage');
    // }
    CreateConversationPage.prototype.selectUser = function (username) {
        console.log(" Select User  ...................", username);
        console.log(" updated Select User  ...................", this.usersSelected);
        var there_is = 0;
        var len = this.usersSelected.length;
        if (this.usersSelected.length == 0) {
            this.usersSelected.push(username);
        }
        else {
            for (var item in this.usersSelected) {
                if (len > 0) {
                    if (this.usersSelected[item] == username) {
                        console.log("Found User already selected");
                        there_is = 1;
                        // this.usersSelected.slice(this.usersSelected.indexOf(item));
                        var index = this.usersSelected.indexOf(this.usersSelected[item]);
                        console.log(" index ", index);
                        if (index > -1) {
                            this.usersSelected.splice(index, 1);
                        }
                    }
                    len = len - 1;
                }
            }
            if (there_is == 0) {
                this.usersSelected.push(username);
            }
        }
    };
    // onChange(val){
    //   console.log(this.usersSelected);
    // }
    CreateConversationPage.prototype.onChange = function (val) {
        console.log(this.usersSelected);
    };
    CreateConversationPage.prototype.nextConversation = function () {
        console.log("NEXT......");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_conversations_create_conversation_new__["a" /* CreateConversationNewPage */], { users: this.usersSelected });
    };
    CreateConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-conversation',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\conversations\create-conversation.html"*/'<!--\n  Generated template for the CreateConversationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>create-conversation</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row >\n    <ion-col col-12>\n        <ion-tags-input [(ngModel)]="usersSelected" [placeholder]="\'Add Friends ..\'"(onChange)="onChange($event)"></ion-tags-input>\n        <!-- <ion-tags-input [(ngModel)]="usersSelected" (onChange)="onChange($event)"></ion-tags-input> -->\n      <!-- <ion-textarea [(ngModel)]="users_selected" >   </ion-textarea> -->\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-list>\n          <button class="create-conv" ion-button outline color="dark" (click)="cancelConversation()" >Cancel</button>   \n          <button ion-button outline class="create-conv" (click)="nextConversation()">Next</button>\n      </ion-list>\n  </ion-row> \n    <ion-list class="ion-list" >    \n            <!-- LOOP WITH THE FRIENDS LIST -->        \n            <ion-item *ngFor="let list of List; let i=index" >\n        <!-- CONTACT FROM OTHERLY  -->\n        <ion-row *ngIf="list.instance.source ==\'O\'" (click)="selectUser(list.instance.username)">            \n                    <ion-col class="user-picture" col-3 >\n                      <img *ngIf="list.instance.photo_url ==\'\' || list.instance.photo_url == undefined" src="assets/img/avatar_small.png" />\n                      <img *ngIf="list.instance.photo_url !== undefined"  src=\'{{list.instance.photo_url}}\' />\n                    </ion-col>\n                    <ion-col col-5>\n                      <div *ngIf="list.instance.first_name != \'\'" class="object-item">\n                        <div ><b>{{list.instance.full_name}}</b>\n                        </div>\n                      </div>          \n                      <!-- <div *ngIf="list.instance.first_name == \'\' && list.instance.full_name != \'\' " class="object-item">\n                        <div ><b>{{list.instance.full_name}}</b>\n                        </div>\n                      </div> -->\n            \n                      <div *ngIf="list.instance.rating == 0" >\n                        <ion-icon class="star" name=\'star\' ></ion-icon>\n                        <ion-icon class="star" name=\'star\'  ></ion-icon>\n                        <ion-icon class="star" name=\'star\'  ></ion-icon>\n                      </div>\n                      <div *ngIf="list.instance.rating == 1" >\n                        <ion-icon class="star yellow-star" name=\'star\'  ></ion-icon>\n                        <ion-icon class="star" name=\'star\'></ion-icon>\n                        <ion-icon class="star" name=\'star\' ></ion-icon>\n                      </div>\n                      <div *ngIf="list.instance.rating == 2" >\n                        <ion-icon class="star yellow-star" name=\'star\' ></ion-icon>\n                        <ion-icon class="star yellow-star" name=\'star\'></ion-icon>\n                        <ion-icon class="star" name=\'star\'></ion-icon>\n                      </div>\n                      <div *ngIf="list.instance.rating == 3" >\n                        <ion-icon class="star yellow-star" name=\'star\' ></ion-icon>\n                        <ion-icon class="star yellow-star" name=\'star\' ></ion-icon>\n                        <ion-icon class="star yellow-star" name=\'star\'></ion-icon>\n                      </div>\n            \n            \n                    </ion-col>\n            \n                    <ion-col col-4 class="ion-col-helps">\n                      <div class="helps_given">{{list.instance.helps_given}}</div>\n                      <div class="helps_given_text">helps given</div>\n                    </ion-col>\n                  </ion-row>\n            \n                   <!-- CONTACT FROM MOBILE  -->\n      <ion-row *ngIf="list.instance.source ==\'M\'">\n          \n                  <ion-col col-2 *ngIf="list.instance.photo_url ==\'\'">\n                    <img  src="assets/img/avatar_small.png" />\n                  </ion-col>\n                  <ion-col col-6>\n                    <div class="object-item">\n                      <div ><b>{{list.instance.full_name}}</b>\n                      </div>\n                    </div>          \n                  </ion-col>         \n                  <ion-col col-4 class="ion-col-helps">\n                        <button>INVITE</button>\n                  </ion-col>\n                </ion-row>\n            </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\conversations\create-conversation.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__["a" /* Contacts */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
    ], CreateConversationPage);
    return CreateConversationPage;
}());

//# sourceMappingURL=create-conversation.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateConversationNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_conversations_conversation_details__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//provider



/**
 * Generated class for the CreateConversationNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var CreateConversationNewPage = (function () {
    function CreateConversationNewPage(OtherlyAPI, Lds, navCtrl, navParams) {
        this.OtherlyAPI = OtherlyAPI;
        this.Lds = Lds;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersSelected = [];
        this.usersSelected = this.navParams.get('users');
    }
    CreateConversationNewPage.prototype.createConversation = function () {
        var _this = this;
        console.log("  createConversation ", JSON.stringify(this.conversationSubject));
        this.OtherlyAPI.CreateConversation(this.usersSelected, this.conversationSubject).then(function (data) {
            console.log(" Code Returned  ", data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_conversations_conversation_details__["a" /* ConversationDetailsPage */], { conv_code: data });
        });
    };
    CreateConversationNewPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CreateConversationNewPage');
    };
    CreateConversationNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-conversation-new',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\conversations\create-conversation-new.html"*/'<!--\n  Generated template for the CreateConversationNewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>create-conversation-new</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-row>\n        <ion-item>\n          <ion-input class="ion-input" name="conversationSubject" placeholder="Enter Conversation Subject" [(ngModel)]="conversationSubject" ></ion-input>\n        </ion-item>\n      </ion-row>\n      \n      <ion-row>\n          <ion-list>\n              <button class="create-conv-new" ion-button outline color="dark" (click)="cancelConversation()" >Cancel</button>   \n              <button ion-button outline class="create-conv-new" (click)="createConversation()">Done</button>\n          </ion-list>\n      </ion-row>\n      \n\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\conversations\create-conversation-new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CreateConversationNewPage);
    return CreateConversationNewPage;
}());

//# sourceMappingURL=create-conversation-new.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_share_with_friends_share_with_friends__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//PROVIDERS

//PAGES

/**
 * Generated class for the SharePopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SharePopoverComponent = (function () {
    function SharePopoverComponent(SociaCtrl, OtherlyCtrl, NavCtrl, NavParamsCtrl) {
        var _this = this;
        this.SociaCtrl = SociaCtrl;
        this.OtherlyCtrl = OtherlyCtrl;
        this.NavCtrl = NavCtrl;
        this.NavParamsCtrl = NavParamsCtrl;
        this.Post = [];
        this.OtherlyCtrl.GetCommunities('access_token', {}).then(function (data) {
            _this.Communities = data;
            console.log('COMMUNITIES ' + JSON.stringify(_this.Communities));
        });
        // this.OtherlyCtrl.GetFriendsList('',{})
        //      .then(data => {
        //        this.Friends = data;
        // });
        this.Post = this.NavParamsCtrl.get('post_details');
        console.log("POST DETAILS :" + JSON.stringify(this.Post));
    }
    SharePopoverComponent.prototype.ShareFB = function () {
        this.SociaCtrl.canShareVia('com.apple.social.facebook');
        this.SociaCtrl.shareViaFacebook('Visitem', 'https://otherlymedia.s3.amazonaws.com/media/cache/56/a4/56a4b740521a6687b364f5e87fbf038f.jpg', 'https://other.ly').then(function (res) {
            console.log("facebook share reply ", JSON.stringify(res));
        });
    };
    SharePopoverComponent.prototype.ShareWithFriends = function () {
        this.NavCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_share_with_friends_share_with_friends__["a" /* ShareWithFriendsPage */], { post_details: this.Post });
    };
    SharePopoverComponent.prototype.changed = function () {
        console.log('Selected ' + this.ShareOptions);
    };
    SharePopoverComponent.prototype.ChooseCommunity = function (community) {
        console.log('Community ' + community);
    };
    SharePopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'share-popover',template:/*ion-inline-start:"E:\ionic2\ionic2\src\components\share-popover\share-popover.html"*/'<!-- Generated template for the SharePopoverComponent component -->\n<ion-list radio-group [(ngModel)]="ShareOptions" multiple="true">\n\n	<ion-title>Choose where to share</ion-title>\n	<ion-item (click)="ShareFB()"><ion-label><ion-icon name="star"></ion-icon> Facebook</ion-label></ion-item>\n\n	<ion-item (click)="ShareWithFriends()">\n		<ion-label > \n			<ion-icon name="star"></ion-icon> \n		Share with my friends\n		</ion-label>\n		<!--<ion-radio (ionSelect)="changed()" value="my-friends" name=\'radio_friends\'></ion-radio>-->\n	</ion-item>\n	<!-- <ion-list class="friends-list" *ngIf="Friends && ShareOptions == \'my-friends\'" >\n		<ion-item *ngFor="let friend of Friends">\n	    \n	    	<ion-checkbox ></ion-checkbox>\n	    	\n	    	<ion-label>\n	    		<div *ngIf="friend.instance.first_name != \'\'" class="object-item">\n            		<div ><b>{{friend.instance.full_name}}</b>\n            		</div>\n          		</div>\n          	</ion-label>\n\n	    	\n		</ion-item>\n	</ion-list> -->\n\n\n\n\n	<ion-item>\n    \n    	<ion-radio (ionSelect)="changed()" value="my-page" ></ion-radio><ion-label>Share on my page</ion-label>\n	</ion-item>\n	<ion-item>\n    \n    	<ion-label>Share on my community</ion-label>\n    	<ion-radio (ionSelect)="changed()" value="my-community" name=\'radio_community\'></ion-radio>\n	</ion-item>\n	<ion-list *ngIf="Communities && ShareOptions == \'my-community\'" >\n		<ion-item *ngFor="let community of Communities">\n	    \n	    	<ion-checkbox (click)="ChooseCommunity(community.slug)"></ion-checkbox>\n	    	\n	    	<ion-label><ion-icon name="people"></ion-icon> {{community.title}}</ion-label>\n\n	    	\n		</ion-item>\n\n		<ion-row>\n			<ion-col col-6>\n				<button ion-button round full>CLEAR</button>\n			</ion-col>\n			<ion-col col-6>\n				<button ion-button round full>SHARE</button>\n			</ion-col>\n		</ion-row>\n	</ion-list>\n\n\n\n</ion-list>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\components\share-popover\share-popover.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SharePopoverComponent);
    return SharePopoverComponent;
}());

//# sourceMappingURL=share-popover.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareWithFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_share_with_friends_post_share_with_friends__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//provider


//NATIVE FEATURES


//PAGES

/**
 * Generated class for the CreateConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShareWithFriendsPage = (function () {
    function ShareWithFriendsPage(navCtrl, navParamsCtrl, inAppB, OtherlyAPI, Lds, events, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParamsCtrl = navParamsCtrl;
        this.inAppB = inAppB;
        this.OtherlyAPI = OtherlyAPI;
        this.Lds = Lds;
        this.events = events;
        this.app = app;
        this.List = [];
        this.list = [];
        this.mobile_contact = [];
        this.add_friends = false;
        this.search = -2;
        this.usersSelected = [];
        this.usernames = [];
        this.Post = [];
        this.Post = this.navParamsCtrl.get('post_details');
        console.log("SHARE WITH FRIENDS PAGE " + JSON.stringify(this.Post));
        this.Lds.getUser().then(function (data) {
            _this.UserData = data;
            //USER INFORMATIONS HAVE BEEN RECEIVED HERE
            _this.OtherlyAPI.GetFriendsList(_this.UserData.otherly_token, {})
                .then(function (data) {
                _this.API_List = data;
                for (var item in _this.API_List)
                    _this.list.push(_this.API_List[item]);
                _this.List = _this.list.sort(function (a, b) {
                    if (a.instance.full_name < b.instance.full_name)
                        return -1;
                    if (a.instance.full_name > b.instance.full_name)
                        return 1;
                    return 0;
                });
                _this.quantity = _this.List.length;
            });
        });
    }
    ShareWithFriendsPage.prototype.ionSelected = function () {
        console.log("Friends has been selected");
        this.add_friends = false;
        console.log(this.add_friends);
    };
    ShareWithFriendsPage.prototype.goto = function (params) {
        //const browser = this.inAppB.create("http://" + params+"" , '_self',{location:'yes'});
    };
    ShareWithFriendsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.List.push(_this.List.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    ShareWithFriendsPage.prototype.changeRating = function (username, rating) {
        var _this = this;
        console.log('Change ' + rating);
        //let popover = this.PopOverCtrl.create(ChangeRatePopoverPage,{username:username,rate: rating},{});
        //popover.present();
        Object.keys(this.List).forEach(function (key) {
            if (_this.List[key].instance.username == username) {
                if (_this.List[key].instance.rating == rating)
                    _this.List[key].instance.rating = 0;
                else {
                    _this.List[key].instance.rating = rating;
                }
            }
        });
        for (var _i = 0, _a = this.List; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.instance.username == username) {
                console.log('Found: ' + item.instance.username);
            }
        }
    };
    ShareWithFriendsPage.prototype.Search = function () {
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
        for (var item in this.list) {
            if (this.list[item].indexOf(this.search_friend) >= 0) {
                console.log('Found: ' + this.list[item].full_name);
            }
        }
    };
    ShareWithFriendsPage.prototype.Show_Add_friends = function () {
        this.add_friends = !this.add_friends;
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad CreateConversationPage');
    // }
    ShareWithFriendsPage.prototype.selectUser = function (user) {
        console.log(" Select User  ...................", user.full_name);
        //console.log(" updated Select User  ...................", this.usersSelected);
        var there_is = 0;
        var len = this.usersSelected.length;
        if (this.usersSelected.length == 0) {
            this.usersSelected.push(user.full_name);
            this.usernames.push({
                username: user.username,
                full_name: user.full_name,
                photo_url: user.photo_url,
                status: user.status,
                rating: user.rating,
                helps_given: user.helps_given
            });
        }
        else {
            for (var item in this.usersSelected) {
                if (len > 0) {
                    if (this.usersSelected[item] == user.full_name) {
                        console.log("Found User already selected");
                        there_is = 1;
                        // this.usersSelected.slice(this.usersSelected.indexOf(item));
                        var index = this.usersSelected.indexOf(this.usersSelected[item]);
                        console.log(" index ", index);
                        if (index > -1) {
                            this.usersSelected.splice(index, 1);
                            this.usernames.splice(index, 1);
                        }
                    }
                    len = len - 1;
                }
            }
            if (there_is == 0) {
                this.usersSelected.push(user.full_name);
                this.usernames.push({
                    username: user.username,
                    full_name: user.full_name,
                    photo_url: user.photo_url,
                    status: user.status,
                    rating: user.rating,
                    helps_given: user.helps_given
                });
            }
        }
        console.log("usernames: " + JSON.stringify(this.usernames));
    };
    // onChange(val){
    //   console.log(this.usersSelected);
    // }
    ShareWithFriendsPage.prototype.onChange = function (val) {
        //console.log(this.usersSelected);
    };
    ShareWithFriendsPage.prototype.nextConversation = function () {
        console.log("NEXT......");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_share_with_friends_post_share_with_friends__["a" /* PostShareWithFriendsPage */], { users: this.usernames });
    };
    ShareWithFriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-share-with-friends',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\share-with-friends\share-with-friends.html"*/'<!--\n  Generated template for the CreateConversationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <!-- <ion-title>sharing</ion-title> -->\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n    <ion-card  >\n\n      <ion-row >\n\n        <ion-col class="user-picture" col-2 >\n          <img *ngIf="Post.post.post.creator.photo_url == null" src="assets/img/avatar_small.png" />\n          <img *ngIf="Post.post.post.creator.photo_url != null"  src=\'{{Post.post.post.creator.photo_url}}\' />\n        </ion-col>\n        \n        <ion-col col-9>\n          <ion-card-header text-wrap>\n            {{Post.post.post.subject}}\n          </ion-card-header>\n\n          <ion-card-content text-wrap>\n            {{Post.post.post.text}}\n          </ion-card-content>\n        </ion-col>\n\n       \n      </ion-row>\n\n        \n    </ion-card>\n\n\n\n  <ion-row >\n    <ion-col col-12>\n        <ion-tags-input [(ngModel)]="usersSelected" [placeholder]="\'Add Friends ..\'"(onChange)="onChange($event)"></ion-tags-input>\n        <!-- <ion-tags-input [(ngModel)]="usersSelected" (onChange)="onChange($event)"></ion-tags-input> -->\n      <!-- <ion-textarea [(ngModel)]="users_selected" >   </ion-textarea> -->\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-list>\n          <button class="create-conv" ion-button outline color="dark" (click)="cancelConversation()" >Cancel</button>   \n          <button ion-button outline class="create-conv" (click)="nextConversation()">Next</button>\n      </ion-list>\n  </ion-row> \n    <ion-list class="ion-list" >    \n            <!-- LOOP WITH THE FRIENDS LIST -->        \n            <ion-item *ngFor="let list of List; let i=index" >\n        <!-- CONTACT FROM OTHERLY  -->\n        		<ion-row *ngIf="list.instance.source ==\'O\'" (click)="selectUser(list.instance)">            \n                    <ion-col class="user-picture" col-3 >\n                      <img *ngIf="list.instance.photo_url ==\'\' || list.instance.photo_url == undefined" src="assets/img/avatar_small.png" />\n                      <img *ngIf="list.instance.photo_url !== undefined"  src=\'{{list.instance.photo_url}}\' />\n                    </ion-col>\n                    <ion-col col-5>\n                      <div *ngIf="list.instance.first_name != \'\'" class="object-item">\n                        <div ><b>{{list.instance.full_name}}</b>\n                        </div>\n                      </div>          \n                    \n            		</ion-col>\n            	</ion-row>\n            </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\share-with-friends\share-with-friends.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__["a" /* Contacts */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ShareWithFriendsPage);
    return ShareWithFriendsPage;
}());

//# sourceMappingURL=share-with-friends.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostShareWithFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//provider


/**
 * Generated class for the CreateConversationNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var PostShareWithFriendsPage = (function () {
    function PostShareWithFriendsPage(OtherlyAPI, Lds, navCtrl, navParams) {
        this.OtherlyAPI = OtherlyAPI;
        this.Lds = Lds;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersSelected = [];
        this.usersSelected = this.navParams.get('users');
    }
    PostShareWithFriendsPage.prototype.createConversation = function () {
        console.log("  createConversation ", JSON.stringify(this.conversationSubject));
        this.OtherlyAPI.CreateConversation(this.usersSelected, this.conversationSubject).then(function (data) {
            console.log(" Code Returned  ", data);
            //this.navCtrl.push(ConversationDetailsPage,{conv_code:data});
        });
    };
    PostShareWithFriendsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CreateConversationNewPage');
    };
    PostShareWithFriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-share-with-friends',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\share-with-friends\post-share-with-friends.html"*/'<!--\n  Generated template for the CreateConversationNewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-title>Share Post</ion-title> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-row>\n        <ion-item>\n          <ion-input class="ion-input" name="conversationSubject" placeholder="Enter the message to share" [(ngModel)]="conversationSubject" ></ion-input>\n        </ion-item>\n      </ion-row>\n      \n      <ion-row>\n          <ion-list>\n              <button class="create-conv-new" ion-button outline color="dark" (click)="cancelConversation()" >Cancel</button>   \n              <button ion-button outline class="create-conv-new" (click)="createConversation()">Done</button>\n          </ion-list>\n      </ion-row>\n\n\n  <ion-list>\n       <ion-item *ngFor="let list of usersSelected" >\n\n    \n      <ion-row >\n          \n        <ion-col class="user-picture" col-3 >\n          <img *ngIf="list.photo_url ==\'\' || list.photo_url == undefined" src="assets/img/avatar_small.png" />\n          <img *ngIf="list.photo_url !== undefined"  src=\'{{list.photo_url}}\' />\n        </ion-col>\n        \n        <ion-col col-5>\n          <div *ngIf="list.first_name != \'\'" class="object-item">\n            <div ><b>{{list.full_name}}</b>\n            </div>\n          </div>\n\n\n        </ion-col>\n\n        <ion-col col-4 class="ion-col-helps">\n          <div class="helps_given">{{list.helps_given}}</div>\n          <div class="helps_given_text">Helps given</div>\n        </ion-col>\n      </ion-row>\n\n        \n    </ion-item>\n\n    \n    <!-- END OF LOOP -->\n  </ion-list>\n      \n\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\share-with-friends\post-share-with-friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PostShareWithFriendsPage);
    return PostShareWithFriendsPage;
}());

//# sourceMappingURL=post-share-with-friends.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageFriend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//provider

var HomePageFriend = (function () {
    function HomePageFriend(navCtrl, Lds, OtherlyAPI) {
        this.navCtrl = navCtrl;
        this.Lds = Lds;
        this.OtherlyAPI = OtherlyAPI;
        this.UserData = [];
        this.UserData.push({
            username: this.navCtrl.get('username'),
            first_name: this.navCtrl.get('first_name'),
            full_name: this.navCtrl.get('full_name'),
            photo_url: this.navCtrl.get('photo_url'),
            helps_given: this.navCtrl.get('helps_given'),
            thanks_sent: this.navCtrl.get('thanks_sent')
        });
        //this.UserData = this.navCtrl.get('UserData');
        // this.Lds.getUser()
        //     .then(data => {
        //       this.UserData = data;
        //   });
        console.log("USER DATA" + JSON.stringify(this.UserData));
    }
    HomePageFriend.prototype.openPage = function (params) {
        window.open("http://" + params + "", '_self');
    };
    HomePageFriend.prototype.createPost = function () {
        console.log("post text: " + this.post_text);
        // if(this.post_text!= ""){
        //   this.OtherlyAPI.CreatePost(this.post_text, this.UserData.username).then(res => {
        //     console.log(res);
        //   })
        //}
    };
    HomePageFriend = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hide-tabs ion-fixed>\n    <ion-icon name="back" class="icon-back"></ion-icon>\n\n    \n    \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class="infos" padding>\n      <ion-col col-12 class="about">\n        About me\n      </ion-col>\n      <ion-col col-12 class="user-info" *ngIf="UserData.photo_url != null">\n        <img class="infos-img" src="{{ UserData.photo_url }}" />\n      </ion-col>\n      <ion-col col-12 class="user-info" *ngIf="UserData.photo_url == null">\n          <img class="infos-img" src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-12 class="user-name" *ngIf="UserData">\n        {{ UserData.full_name }}\n      </ion-col>\n\n      <ion-col col-12 class="user-info">\n        <ion-col col-4 class="user-info">\n          <ion-grid>\n          <p class="quantity number">{{ UserData.helps_given }}</p><br/>\n          <p class="quantity title">Helps given</p>\n          </ion-grid>\n        </ion-col>\n      <div class="separator"></div>\n      <ion-col col-4 class="user-info">\n        <ion-grid>\n        <p class="quantity title">Vancouver, Canada</p>\n\n        </ion-grid>\n      </ion-col>\n      <div class="separator"></div>\n      <ion-col col-4 class="user-info">\n        <ion-grid class="quantity number"><p>{{ UserData.thanks_sent }}</p><br/>\n        <p class="quantity title">Thanks sent</p>\n        </ion-grid>\n      </ion-col>\n      </ion-col>\n\n\n\n      <ion-row class="buttons_options">\n        <ion-col col-3 >\n          <img src="assets/img/post.png" />\n        </ion-col>\n\n\n\n        <ion-col col-3 >\n          \n          <img  src="assets/img/activities.png" />\n        </ion-col>\n\n        <ion-col col-3 >\n          \n          <img src="assets/img/inspire_blue.png" />\n        </ion-col>\n\n        <ion-col col-3 >\n          \n          <img src="assets/img/more_blue.png" />\n        </ion-col>\n    \n    </ion-row>\n\n      \n  </ion-row>\n  \n  \n\n\n\n\n\n\n  \n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]])
    ], HomePageFriend);
    return HomePageFriend;
}());

// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// @Component({
//   selector: 'page-home',
//template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hide-tabs ion-fixed>\n    <ion-icon name="back" class="icon-back"></ion-icon>\n\n    \n    \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class="infos" padding>\n      <ion-col col-12 class="about">\n        About me\n      </ion-col>\n      <ion-col col-12 class="user-info" *ngIf="UserData.photo_url != null">\n        <img class="infos-img" src="{{ UserData.photo_url }}" />\n      </ion-col>\n      <ion-col col-12 class="user-info" *ngIf="UserData.photo_url == null">\n          <img class="infos-img" src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-12 class="user-name" *ngIf="UserData">\n        {{ UserData.full_name }}\n      </ion-col>\n\n      <ion-col col-12 class="user-info">\n        <ion-col col-4 class="user-info">\n          <ion-grid>\n          <p class="quantity number">{{ UserData.helps_given }}</p><br/>\n          <p class="quantity title">Helps given</p>\n          </ion-grid>\n        </ion-col>\n      <div class="separator"></div>\n      <ion-col col-4 class="user-info">\n        <ion-grid>\n        <p class="quantity title">Vancouver, Canada</p>\n\n        </ion-grid>\n      </ion-col>\n      <div class="separator"></div>\n      <ion-col col-4 class="user-info">\n        <ion-grid class="quantity number"><p>{{ UserData.thanks_sent }}</p><br/>\n        <p class="quantity title">Thanks sent</p>\n        </ion-grid>\n      </ion-col>\n      </ion-col>\n\n\n\n      <ion-row class="buttons_options">\n        <ion-col col-3 >\n          <img src="assets/img/post.png" />\n        </ion-col>\n\n\n\n        <ion-col col-3 >\n          \n          <img  src="assets/img/activities.png" />\n        </ion-col>\n\n        <ion-col col-3 >\n          \n          <img src="assets/img/inspire_blue.png" />\n        </ion-col>\n\n        <ion-col col-3 >\n          \n          <img src="assets/img/more_blue.png" />\n        </ion-col>\n    \n    </ion-row>\n\n      \n  </ion-row>\n  \n  \n\n\n\n\n\n\n  \n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\home\home.html"*/
// })
// export class HomePage {
//   constructor(public navCtrl: NavController) {
//   }
// }
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_more_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_feed_home_feed__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_post_detail_post_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_friends_friends__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_share_with_friends_share_with_friends__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_share_with_friends_post_share_with_friends__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_conversations_conversations__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_conversations_conversation_details__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_conversations_create_conversation_new__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_conversations_create_conversation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_more_more__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_share_popover_share_popover__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_tags_input__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_facebook__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_otherly_api_otherly_api__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { ChangeRatePopoverPage } from '../pages/friends/change-rate-popover';







//COMPONENTS


//Providers

//import {GooglePlus} from '@ionic-native/google-plus';







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_feed_home_feed__["a" /* HomeFeedPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_post_detail_post_detail__["a" /* PostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_more_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePageFriend */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friends_friends__["a" /* Friends */],
                __WEBPACK_IMPORTED_MODULE_11__pages_share_with_friends_share_with_friends__["a" /* ShareWithFriendsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_share_with_friends_post_share_with_friends__["a" /* PostShareWithFriendsPage */],
                //ChangeRatePopoverPage,
                __WEBPACK_IMPORTED_MODULE_13__pages_conversations_conversations__["a" /* ConversationsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_conversations_conversation_details__["a" /* ConversationDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_conversations_create_conversation__["a" /* CreateConversationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_conversations_create_conversation_new__["a" /* CreateConversationNewPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__components_share_popover_share_popover__["a" /* SharePopoverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { tabsHideOnSubPages: "true" }, {
                    links: [
                        { loadChildren: '../pages/conversations/conversations.module#ConversationsPageModule', name: 'ConversationsPage', segment: 'conversations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-feed/home-feed.module#HomeFeedPageModule', name: 'HomeFeedPage', segment: 'home-feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-detail/post-detail.module#PostDetailPageModule', name: 'PostDetailPage', segment: 'post-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21_ionic_tags_input__["a" /* IonTagsInputModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_feed_home_feed__["a" /* HomeFeedPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_post_detail_post_detail__["a" /* PostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_more_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePageFriend */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friends_friends__["a" /* Friends */],
                __WEBPACK_IMPORTED_MODULE_11__pages_share_with_friends_share_with_friends__["a" /* ShareWithFriendsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_share_with_friends_post_share_with_friends__["a" /* PostShareWithFriendsPage */],
                //ChangeRatePopoverPage,
                __WEBPACK_IMPORTED_MODULE_13__pages_conversations_conversations__["a" /* ConversationsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_conversations_conversation_details__["a" /* ConversationDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_conversations_create_conversation__["a" /* CreateConversationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_conversations_create_conversation_new__["a" /* CreateConversationNewPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__components_share_popover_share_popover__["a" /* SharePopoverComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_localdata_localdata__["a" /* LocaldataProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_29__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeRatePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Otherly API connection
var ChangeRatePopoverPage = (function () {
    //@ViewChild(Content) content: Content;
    function ChangeRatePopoverPage(navCtrl, navParams, events, app, PopOverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.app = app;
        this.PopOverCtrl = PopOverCtrl;
        this.user = this.navParams.get('username');
        this.rate = this.navParams.get('rate');
    }
    ChangeRatePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\friends\change-rate-popover.html"*/'<ion-list>\n      <!--<ion-title>Confirm rate ?</ion-title>-->\n      <ion-row>\n      	<ion-col col-6>\n      	  <div class="stars" *ngIf="rate == 0" >\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,1)"></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,2)" ></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,3)" ></ion-icon>\n          </div>\n          <div class="stars" *ngIf="rate == 1" >\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,1)" ></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,2)"></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,3)"></ion-icon>\n          </div>\n          <div class="stars" *ngIf="rate == 2" >\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,1)"></ion-icon>\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,2)"></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,3)"></ion-icon>\n          </div>\n          <div class="stars" *ngIf="rate == 3" >\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,1)"></ion-icon>\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,2)"></ion-icon>\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,3)"></ion-icon>\n          </div>\n      </ion-col>\n\n      <ion-col col-3 class="buttons cancel">\n      		<ion-icon name="close" (click)="close()"></ion-icon>\n      	</ion-col>\n      	<ion-col col-3 class="buttons apply">\n      		<ion-icon name="checkmark" (click)="apply()"></ion-icon>\n      </ion-col>\n  </ion-row>\n\n\n      <!--</ion-row>-->\n      <!-- <ion-row>\n      	\n      </ion-row> -->\n  </ion-list>'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\friends\change-rate-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
    ], ChangeRatePopoverPage);
    return ChangeRatePopoverPage;
}());

//# sourceMappingURL=change-rate-popover.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_more_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_friends_friends__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_more_home__["a" /* HomePage */] },
            { title: 'Friends', component: __WEBPACK_IMPORTED_MODULE_6__pages_friends_friends__["a" /* Friends */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]); //page.component
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic2\ionic2\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\ionic2\ionic2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otherly_api_otherly_api__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//provider


/**
 * Generated class for the ConversationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConversationDetailsPage = (function () {
    function ConversationDetailsPage(OtherlyAPI, Lds, navCtrl, navParams) {
        var _this = this;
        this.OtherlyAPI = OtherlyAPI;
        this.Lds = Lds;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Details = [];
        this.replies = [];
        this.code = this.navParams.get('conv_code');
        OtherlyAPI.GetConversationDetails(this.code).then(function (data) {
            _this.details = data;
            for (var item in _this.details) {
                for (var reply in _this.details[item].replies) {
                    _this.replies.push(_this.details[item].replies[reply]);
                }
            }
            _this.replies.reverse();
            for (var item in _this.details) {
                _this.Details.push(_this.details[item]);
            }
        });
    }
    ConversationDetailsPage.prototype.ionViewDidLoad = function () {
        // this.content.scrollToBottom();
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(300);
        }, 1000);
    };
    ConversationDetailsPage.prototype.replyConversation = function () {
        var _this = this;
        var text = this.reply;
        this.OtherlyAPI.ReplyConversation(this.reply, this.code).then(function (data) {
            _this.replies.push({
                text: text,
                participant: {
                    user: {
                        first_name: 'ITS ME',
                        last_name: 'my last name'
                    }
                }
            });
            setTimeout(function () {
                _this.content.scrollToBottom(300);
            }, 500);
        });
        this.reply = '';
    };
    ConversationDetailsPage.prototype.clearConversation = function () {
        this.reply = '';
    };
    ConversationDetailsPage.prototype.ionViewDidEnter = function () {
        this.content.scrollToBottom();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["c" /* Content */])
    ], ConversationDetailsPage.prototype, "content", void 0);
    ConversationDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conversation-details',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\conversations\conversation-details.html"*/'<!--\n  Generated template for the ConversationDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>conversation-details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content   padding>\n  <h2>test</h2>\n\n<!-- \n    <ion-item *ngFor="let item in details" >\n      {{item}}\n    </ion-item> -->\n    <!-- <ion-item class="chat-item" *ngFor="let item of Details"> -->\n      <!-- <ion-item *ngFor="let replies of item.replies ">\n          {{ replies.text }}\n      </ion-item> -->\n      <ion-item class="chat-item" *ngFor="let reply of replies" >\n          <ion-col col-2>\n              <img class="chat-avatar" src="assets/img/avatar_small.png" /> \n          </ion-col>\n      <div *ngIf="reply.participant.user.username == \'test_lyrylhb_three\'" class="talk-bubble round tri-right right-top">\n        <div class="talktext">\n          <p><strong>{{reply.participant.user.first_name}} {{reply.participant.user.last_name}}</strong><br/>\n             {{ reply.text }}</p>\n        </div>\n      </div>\n\n      <div *ngIf="reply.participant.user.username !== \'test_lyrylhb_three\'" class="talk-bubble round tri-right left-top">\n        <div class="talktext">\n          <p><strong>{{reply.participant.user.first_name}} {{reply.participant.user.last_name}}</strong><br/>\n             {{ reply.text }}</p>\n        </div>\n      </div>\n    </ion-item>\n   <div class="chat-gap" >\n   </div>\n  <div class="chat-panel">\n   <ion-input type="text" class="chat-box" [(ngModel)]="reply" (keyup.enter)="replyConversation()" placeholder="Reply Message" ></ion-input> \n    <div >\n      <button class="chat-buttoms" ion-button outline color="dark" (click)="clearConversation()" >Clear</button>   \n      <button ion-button outline class="chat-buttoms" (click)="replyConversation()">Send</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\conversations\conversation-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__["a" /* LocaldataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ConversationDetailsPage);
    return ConversationDetailsPage;
}());

//# sourceMappingURL=conversation-details.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//provider

var HomePage = (function () {
    function HomePage(navCtrl, Lds, OtherlyAPI) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.Lds = Lds;
        this.OtherlyAPI = OtherlyAPI;
        //this.UserData = this.navCtrl.get('UserData');
        this.Lds.getUser()
            .then(function (data) {
            _this.UserData = data;
            _this.OtherlyAPI.GetFeedList(_this.UserData.otherly_token, {}).then(function (res) {
                _this.my_Posts = res;
                console.log("My state POSTS " + JSON.stringify(_this.my_Posts));
            });
        });
    }
    HomePage.prototype.createPost = function () {
        console.log("post text: " + this.post_text);
        if (this.post_text != "") {
            this.OtherlyAPI.CreatePost(this.post_text, this.UserData.username).then(function (res) {
                console.log(res);
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-more',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\more\home.html"*/'<ion-header>\n\n  <ion-navbar hide-tabs ion-fixed>\n    <ion-icon name="back" class="icon-back"></ion-icon>\n\n    \n    \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class="infos" padding>\n      <ion-col col-12 class="about">\n        About me\n      </ion-col>\n      <ion-col col-12 class="user-info" *ngIf="UserData.picture != null">\n        <img class="infos-img" src="{{ UserData.photo_url }}" />\n      </ion-col>\n      <ion-col col-12 class="user-info" *ngIf="UserData.picture == null">\n          <img class="infos-img" src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-12 class="user-name" *ngIf="UserData">\n        {{ UserData.full_name }}\n      </ion-col>\n\n      <ion-col col-12 class="user-info">\n        <ion-col col-4 class="user-info">\n          <ion-grid>\n          <p class="quantity number">{{ UserData.helps_given }}</p><br/>\n          <p class="quantity title">Helps given</p>\n          </ion-grid>\n        </ion-col>\n      <div class="separator"></div>\n      <ion-col col-4 class="user-info">\n        <ion-grid>\n        <p class="quantity title">Vancouver, Canada</p>\n\n        </ion-grid>\n      </ion-col>\n      <div class="separator"></div>\n      <ion-col col-4 class="user-info">\n        <ion-grid class="quantity number"><p>{{ UserData.thanks_sent }}</p><br/>\n        <p class="quantity title">Thanks sent</p>\n        </ion-grid>\n      </ion-col>\n      </ion-col>\n\n\n\n      <ion-row class="buttons_options">\n        <ion-col col-3 >\n          <img src="assets/img/post.png" />\n        </ion-col>\n\n\n\n        <ion-col col-3 >\n          \n          <img  src="assets/img/activities.png" />\n        </ion-col>\n\n        <ion-col col-3 >\n          \n          <img src="assets/img/inspire_blue.png" />\n        </ion-col>\n\n        <ion-col col-3 >\n          \n          <img src="assets/img/more_blue.png" />\n        </ion-col>\n    \n    </ion-row>\n\n      \n  </ion-row>\n  \n  \n\n\n\n\n\n\n  \n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\more\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */]])
    ], HomePage);
    return HomePage;
}());

// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// @Component({
//   selector: 'page-home',
//template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\more\home.html"*/'<ion-header>\n\n  <ion-navbar hide-tabs ion-fixed>\n    <ion-icon name="back" class="icon-back"></ion-icon>\n\n    \n    \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class="infos" padding>\n      <ion-col col-12 class="about">\n        About me\n      </ion-col>\n      <ion-col col-12 class="user-info" *ngIf="UserData.picture != null">\n        <img class="infos-img" src="{{ UserData.photo_url }}" />\n      </ion-col>\n      <ion-col col-12 class="user-info" *ngIf="UserData.picture == null">\n          <img class="infos-img" src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-12 class="user-name" *ngIf="UserData">\n        {{ UserData.full_name }}\n      </ion-col>\n\n      <ion-col col-12 class="user-info">\n        <ion-col col-4 class="user-info">\n          <ion-grid>\n          <p class="quantity number">{{ UserData.helps_given }}</p><br/>\n          <p class="quantity title">Helps given</p>\n          </ion-grid>\n        </ion-col>\n      <div class="separator"></div>\n      <ion-col col-4 class="user-info">\n        <ion-grid>\n        <p class="quantity title">Vancouver, Canada</p>\n\n        </ion-grid>\n      </ion-col>\n      <div class="separator"></div>\n      <ion-col col-4 class="user-info">\n        <ion-grid class="quantity number"><p>{{ UserData.thanks_sent }}</p><br/>\n        <p class="quantity title">Thanks sent</p>\n        </ion-grid>\n      </ion-col>\n      </ion-col>\n\n\n\n      <ion-row class="buttons_options">\n        <ion-col col-3 >\n          <img src="assets/img/post.png" />\n        </ion-col>\n\n\n\n        <ion-col col-3 >\n          \n          <img  src="assets/img/activities.png" />\n        </ion-col>\n\n        <ion-col col-3 >\n          \n          <img src="assets/img/inspire_blue.png" />\n        </ion-col>\n\n        <ion-col col-3 >\n          \n          <img src="assets/img/more_blue.png" />\n        </ion-col>\n    \n    </ion-row>\n\n      \n  </ion-row>\n  \n  \n\n\n\n\n\n\n  \n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\more\home.html"*/
// })
// export class HomePage {
//   constructor(public navCtrl: NavController) {
//   }
// }
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';




//import { GoogleAuth, User } from '@ionic/cloud-angular';

//import {}

var LoginPage = (function () {
    function LoginPage(navCtrl, Facebook, googlePlus, lds, OtherlyAPI, loadingCtrl, contacts) {
        // let getData$ = new Observable(observer => {
        //     this.UserData(() =>{
        //       console.log('Observable');
        //       observer.next(this.UserData);
        //     })
        // });
        this.navCtrl = navCtrl;
        this.Facebook = Facebook;
        this.googlePlus = googlePlus;
        this.lds = lds;
        this.OtherlyAPI = OtherlyAPI;
        this.loadingCtrl = loadingCtrl;
        this.contacts = contacts;
        this.UserData = null;
        // getData$.subscribe(data => console.log(JSON.stringify(data)));
    }
    LoginPage.prototype.FBlogin = function () {
        this.getFacebook().then(function (data) {
            //this.UserData = {email: data['email'], first_name: data['first_name'], last_name: data['last_name'], picture:data['picture_large']['data']['url'], user_name:data['name']};
            console.log("FBlogin " + JSON.stringify(data));
            //this.lds.setUser(data);
            //this.navCtrl.setRoot(TabsPage);
        });
    };
    LoginPage.prototype.showLoading = function () {
    };
    LoginPage.prototype.getFacebook = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading. Please wait...',
            dismissOnPageChange: false // This attribute set to true is trying to dismiss a page which no longer exits set to false error stops
        });
        var data;
        var access_token;
        var Otherly_data;
        return new Promise(function (resolve) {
            _this.Facebook.login(['email', 'public_profile']).then(function (response) {
                access_token = response;
                _this.Facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                    data = { email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'], picture: profile['picture_large']['data']['url'], user_name: profile['name'] };
                    _this.UserData = { email: profile['email'], first_name: profile['first_name'], last_name: profile['last_name'], picture: profile['picture_large']['data']['url'], user_name: profile['name'] };
                    console.log("access token: " + JSON.stringify(access_token.authResponse.accessToken));
                    _this.loading.present();
                    _this.OtherlyAPI.GetOtherlyAccessToken(access_token.authResponse.accessToken).then(function (res) {
                        Otherly_data = res;
                        console.log('SENDING TO SAVE USER otherly-token: ' + Otherly_data);
                        _this.lds.setUser(data, Otherly_data);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                        _this.loading.dismiss();
                    });
                });
            });
            console.log('promise');
            return Promise.resolve(data);
        });
    };
    LoginPage.prototype.Googlelogin = function () {
        var _this = this;
        var data;
        var access_token;
        var Otherly_data;
        this.googlePlus.login({
            'webClientId': '328442368660-gd8ga07as2c268oqn1jkl6gb2ti6dbb6.apps.googleusercontent.com',
            'offline': true,
            'scope': 'names, email'
        }).then(function (res) {
            _this.UserData = JSON.stringify(res);
            alert(res.idToken);
            //sending token to otherly API
            _this.OtherlyAPI.GoogleGetOtherlyAccessToken(res.idToken).then(function (res) {
                Otherly_data = res;
                //alert(Otherly_data);
                _this.loading.dismiss();
            });
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            alert('Error while getting access token: ' + JSON.stringify(err));
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle right class="menu-otherly-home">\n      \n    </button>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="logo" >\n  <img class="logo" src="./assets/img/other.ly_logo.png"/>\n  <p (click)="hey()">\n   Authentic friends. Real comunities.\n  </p>\n\n  <ion-row class="login">\n    <ion-col col-6 >\n\n      <button ion-button (click)="FBlogin()">\n        <ion-label class="icon-face"></ion-label>\n        Login with facebook\n        </button>\n        \n    </ion-col>\n    <ion-col col-6>\n\n      <button ion-button (click)="Googlelogin()">\n        <ion-label class="icon-google"></ion-label>\n        Login with Google\n        </button>\n  </ion-col>\n  </ion-row>\n\n  <ion-row padding class="content">\n    <ion-col col-12>\n      <h1>Belong</h1>\n      <p>\n        to comunities that help each other\n      </p>\n      <img class="content-img" src="assets/img/blue/everybody_blue.png"/>\n      <p>\n        What goes around, comes around\n      </p>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <h1>Auto-Connect</h1>\n      <p>\n        your Facebook and Google friends\n      </p>\n      <img class="content-img" src="assets/img/blue/import-friends_blue.png"/>\n      <p>\n        Don\'t fret, we\'ve got this\n      </p>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <h1>Collaborate</h1>\n      <p>\n        on projects with your pals\n      </p>\n      <img class="content-img" src="assets/img/blue/inspire_blue.png"/>\n      <p>\n        Go do cool stuff\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Post</h1>\n      <p>\n        something that you\'re looking for\n      </p>\n      <img class="content-img" src="assets/img/blue/post_blue.png"/>\n      <p>\n        Leads? Clients? Recommendations\n      </p>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <h1>Find Opportunities</h1>\n      <p>\n        from your network\n      </p>\n      <img class="content-img" src="assets/img/blue/get-help_blue.png"/>\n      <p>\n        Let your friends help you\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Say Thanks</h1>\n      <p>\n        and give all sort of gifts\n      </p>\n      <img class="content-img" src="assets/img/blue/thank-friends_blue.png"/>\n      <p>\n        An easy way to show you care\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Discover</h1>\n      <p>\n        what your friens need\n      </p>\n      <img class="content-img" src="assets/img/blue/search_blue.png"/>\n      <p>\n        Lend a helping hand\n      </p>\n\n    </ion-col>\n\n    <ion-col col-12>\n      <h1>Introduce</h1>\n      <p>\n        friends who can help each other\n      </p>\n      <img class="content-img" src="assets/img/blue/introductions_blue.png"/>\n      <p>\n        Help make a connection\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Enjoy</h1>\n      <p>\n        gifts, perks, and lots of "thank you"s\n      </p>\n      <img class="content-img" src="assets/img/blue/give-gift_blue.png"/>\n      <p>\n        Bask in the glory\n      </p>\n\n    </ion-col>\n\n\n\n    <ion-col col-12>\n      <h1>Chat</h1>\n      <p>\n        privately with friends\n      </p>\n      <img class="content-img" src="assets/img/blue/conversations_blue.png"/>\n      <p>\n        Not everyone needs to see this\n      </p>\n\n    </ion-col>\n\n\n\n    <ion-col col-12>\n      <h1>Share</h1>\n      <p>\n        posts with friends and communities\n      </p>\n      <img class="content-img" src="assets/img/blue/share_blue.png"/>\n      <p>\n        Everyone needs to see this\n      </p>\n\n    </ion-col>\n\n\n\n    <ion-col col-12>\n      <h1>Organize</h1>\n      <p>\n        chats, intros, and more in one place\n      </p>\n      <img class="content-img" src="assets/img/blue/pin_blue.png"/>\n      <p>\n        Everyone in one place\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Send</h1>\n      <p>\n        real-life greeting cards\n      </p>\n      <img class="content-img" src="assets/img/blue/send_blue.png"/>\n      <p>\n        We\'ll find the street address and mail it for you\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Personalize</h1>\n      <p>\n        greeting cards using your photo library\n      </p>\n      <img class="content-img" src="assets/img/blue/activities_blue.png"/>\n      <p>\n        For that personal touch!\n      </p>\n\n    </ion-col>\n\n\n    <ion-col col-12>\n      <h1>Exchange Other.ly Coins</h1>\n      <p>\n        to buy all sort of stuff\n      </p>\n      <img class="content-img" src="assets/img/blue/credit-card_blue.png"/>\n      <p>\n        Easy to earn, easy to spend!\n      </p>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["a" /* Contacts */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_3__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["a" /* Contacts */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_feed_home_feed__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friends__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conversations_conversations__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifications_notifications__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__more_more__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';

//import { HomePage } from '../home/home';




var TabsPage = (function () {
    function TabsPage(nav, events) {
        this.nav = nav;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_feed_home_feed__["a" /* HomeFeedPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__friends_friends__["a" /* Friends */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__conversations_conversations__["a" /* ConversationsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__notifications_notifications__["a" /* NotificationsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__more_more__["a" /* MorePage */];
    }
    TabsPage.prototype.tapped = function () {
        this.events.publish('friends:refresh', Date.now());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mainTabs'),
        __metadata("design:type", TabsPage)
    ], TabsPage.prototype, "mainTabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tabs',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement=\'top\' #mainTabs (tap)="tapped()">\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="otherly-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="otherly-friends"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="otherly-talk"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="otherly-notifications"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="" tabIcon="otherly-search"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="" tabIcon="otherly-more"></ion-tab>\n</ion-tabs>\n\n\n\n\n{{this.userdata | json}}\n{{userdata | json}}'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Friends; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//provider


//NATIVE FEATURES

//PAGES

var Friends = (function () {
    function Friends(navCtrl, navParams, platform, contact, OtherlyAPI, Lds, events, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.contact = contact;
        this.OtherlyAPI = OtherlyAPI;
        this.Lds = Lds;
        this.events = events;
        this.app = app;
        this.List = [];
        this.list = [];
        this.mobile_contact = [];
        this.add_friends = false;
        this.search = -2;
        this.platform.ready().then(function () {
            var opts = {
                filter: "M",
                multiple: true,
                hasPhoneNumber: true,
                fields: ['displayName', 'name']
            };
            contact.find(['displayName', 'name'], opts).then(function (contacts) {
                _this.contactlist = contacts;
                _this.MobileContactsinArray();
            }, function (error) {
                console.log(error);
            });
        });
        this.Lds.getUser().then(function (data) {
            _this.UserData = data;
            //USER INFORMATIONS HAVE BEEN RECEIVED HERE
            _this.OtherlyAPI.GetFriendsList(_this.UserData.otherly_token, {})
                .then(function (data) {
                _this.API_List = data;
                for (var item in _this.API_List)
                    _this.list.push(_this.API_List[item]);
                _this.List = _this.list.sort(function (a, b) {
                    if (a.instance.full_name < b.instance.full_name)
                        return -1;
                    if (a.instance.full_name > b.instance.full_name)
                        return 1;
                    return 0;
                });
                _this.quantity = _this.List.length;
                console.log('LIST O & M: ' + JSON.stringify(_this.List));
            });
        });
    }
    Friends.prototype.MobileContactsinArray = function () {
        for (var item in this.contactlist) {
            this.list.push({
                instance: {
                    full_name: this.contactlist[item].displayName,
                    photo_url: '',
                    mobile_number: this.contactlist[item].phoneNumbers[0].value,
                    rating: '',
                    helps_given: '',
                    source: 'M'
                }
            });
        }
    };
    Friends.prototype.ionSelected = function () {
        console.log("Friends has been selected");
        this.add_friends = false;
        console.log(this.add_friends);
    };
    Friends.prototype.ShowProfile = function (friend) {
        console.log("show Friend Profile " + JSON.stringify(friend));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePageFriend */], { username: friend.username, first_name: friend.first_name, full_name: friend.full_name, photo_url: friend.photo_url, status: friend.status, helps_given: friend.helps_given, thanks_sent: friend.thanks_sent });
    };
    Friends.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.List.push(_this.List.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    Friends.prototype.changeRating = function (username, rating) {
        var _this = this;
        console.log('Change ' + rating);
        var desired_rate = rating;
        var current_rate;
        Object.keys(this.List).forEach(function (key) {
            if (_this.List[key].instance.username == username) {
                if (_this.List[key].instance.rating == rating) {
                    current_rate = _this.List[key].instance.rating;
                    _this.List[key].instance.rating = -1; //SHOWS THE LOADING SPINNER IN FRONT END 
                    rating = 0;
                    _this.OtherlyAPI.ChangeRating(username, rating, _this.UserData.otherly_token).then(function (res) {
                        var result;
                        result = res;
                        if (result.rating == rating) {
                            _this.List[key].instance.rating = 0;
                            console.log("RATE IS THE SAME -BACK TO 0 " + JSON.stringify(res));
                        }
                        else {
                            _this.List[key].instance.rating = current_rate;
                            console.log("ERROR HAPPENED ");
                        }
                    });
                }
                else {
                    current_rate = _this.List[key].instance.rating;
                    _this.List[key].instance.rating = -1; //SHOWS THE LOADING SPINNER IN FRONT END 
                    _this.OtherlyAPI.ChangeRating(username, rating, _this.UserData.otherly_token).then(function (res) {
                        console.log("RATE CHANGED " + JSON.stringify(res));
                        _this.List[key].instance.rating = rating;
                    });
                }
            }
        });
        for (var _i = 0, _a = this.List; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.instance.username == username) {
                console.log('Found: ' + item.instance.username);
            }
        }
    };
    Friends.prototype.Search = function () {
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
        for (var item in this.list) {
            if (this.list[item].indexOf(this.search_friend) >= 0) {
                console.log('Found: ' + this.list[item].full_name);
            }
        }
    };
    Friends.prototype.Show_Add_friends = function () {
        this.add_friends = !this.add_friends;
    };
    Friends.prototype.gocontact = function () {
        alert("enter in google contactlist");
        this.contact.find(['*']).then(function (contacts) {
            alert(JSON.stringify(contacts));
        });
    };
    Friends = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"E:\ionic2\ionic2\src\pages\friends\friends.html"*/'\n\n<ion-content>\n  <ion-item *ngIf="!add_friends">\n    <ion-input [(ngModel)]="search_friend" (keyup.enter)="Search()" placeholder="Search friend..." >\n    </ion-input>\n  </ion-item>\n\n  <ion-row>\n  <ion-col col-5>\n    <div padding>\n      <b>My Friends</b>\n      <b>{{this.userdata | json}}\n        {{userdata | json}}</b>\n    </div>\n  </ion-col>\n\n  <ion-col col-6>\n    <div padding *ngIf="!add_friends">\n      <button (click)="Show_Add_friends()">\n      Add friend\n      </button>\n    </div>\n  </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="add_friends">\n\n    <!-- ADD GOOGLE FRIENDS -->\n    <ion-col col-12 class="add_friend">\n      <ion-col col-2>\n        <img  src="assets/img/Google_Logo.png" />\n      </ion-col>\n\n      <ion-col col-9 >\n        Sync friends with Google \n      </ion-col>\n    </ion-col>\n\n\n    <!-- ADD FACEBOOK FRIENDS -->\n    <ion-col col-12 class="add_friend">\n      <ion-col col-2>\n        <img  src="assets/img/facebook-logo.png" />\n      </ion-col>\n\n      <ion-col col-9>\n        Add Friends from Facebook \n      </ion-col>\n    </ion-col>\n\n    <!-- ADD FRIENDS USING EMAIL -->\n    <ion-col col-12 class="add_friend">\n      <ion-col col-2>\n        <img  src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-9 >\n        Add with e-mail\n      </ion-col>\n    </ion-col>\n\n    <!-- ADD FRIENDS FROM MOBILE CONTACTS -->\n    <ion-col col-12 class="add_friend" (click)="add_contact_mobile()">\n      <ion-col col-2>\n        <img  src="assets/img/avatar_small.png" />\n      </ion-col>\n\n      <ion-col col-9>\n        Add from my mobile contacts\n      </ion-col>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-spinner *ngIf="!List || search == -1"></ion-spinner>\n\n  <ion-row *ngIf="quantity == 0" padding>\n    You don\'t have any friends yet\n  </ion-row>\n\n  <ion-row *ngIf="search == 0" padding>\n    We didn\'t find any result matching your query...\n  </ion-row>\n\n  <ion-list class="ion-list"  *ngIf="quantity != 0 && !add_friends">\n\n    <!-- LOOP WITH THE FRIENDS LIST -->\n    \n    <ion-item *ngFor="let list of List; let i=index" >\n\n    \n\n      <!-- CONTACT FROM OTHERLY  -->\n      <ion-row *ngIf="list.instance.source ==\'O\'">\n\n        \n          \n        <ion-col class="user-picture" col-3 (click)="ShowProfile(list.instance)">\n          <img *ngIf="list.instance.photo_url ==\'\' || list.instance.photo_url == undefined" src="assets/img/avatar_small.png" />\n          <img *ngIf="list.instance.photo_url !== undefined"  src=\'{{list.instance.photo_url}}\' />\n        </ion-col>\n        \n        <ion-col col-5>\n          <div *ngIf="list.instance.first_name != \'\'" class="object-item">\n            <div ><b>{{list.instance.full_name}}</b>\n            </div>\n          </div>\n\n          <!-- <div *ngIf="list.instance.first_name == \'\' && list.instance.full_name != \'\' " class="object-item">\n            <div ><b>{{list.instance.full_name}}</b>\n            </div>\n          </div> -->\n\n          <div *ngIf="list.instance.rating == 0" >\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,1)"></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,2)" ></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,3)" ></ion-icon>\n          </div>\n          <div *ngIf="list.instance.rating == 1" >\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,1)" ></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,2)"></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,3)"></ion-icon>\n          </div>\n          <div *ngIf="list.instance.rating == 2" >\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,1)"></ion-icon>\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,2)"></ion-icon>\n            <ion-icon class="star" name=\'star\' (click)="changeRating(list.instance.username,3)"></ion-icon>\n          </div>\n          <div *ngIf="list.instance.rating == 3" >\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,1)"></ion-icon>\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,2)"></ion-icon>\n            <ion-icon class="star yellow-star" name=\'star\' (click)="changeRating(list.instance.username,3)"></ion-icon>\n          </div>\n\n          <div *ngIf="list.instance.rating == -1 " >\n            <ion-spinner></ion-spinner>\n            \n          </div>\n        \n\n\n        </ion-col>\n\n        <ion-col col-4 class="ion-col-helps">\n          <div class="helps_given">{{list.instance.helps_given}}</div>\n          <div class="helps_given_text">helps given</div>\n        </ion-col>\n      </ion-row>\n\n\n      \n      <!-- CONTACT FROM MOBILE  -->\n      <ion-row *ngIf="list.instance.source ==\'M\'">\n\n        <ion-col col-2 *ngIf="list.instance.photo_url ==\'\'">\n          <img  src="assets/img/avatar_small.png" />\n        </ion-col>\n        <ion-col col-6>\n          <div class="object-item">\n            <div ><b>{{list.instance.full_name}}</b>\n            </div>\n          </div>\n\n\n        </ion-col>\n\n        <ion-col col-4 class="ion-col-helps">\n              <button>INVITE</button>\n        </ion-col>\n      </ion-row>\n\n        \n    </ion-item>\n\n    \n    <!-- END OF LOOP -->\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic2\ionic2\src\pages\friends\friends.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__["a" /* Contacts */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_3__providers_otherly_api_otherly_api__["a" /* OtherlyApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_localdata_localdata__["a" /* LocaldataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], Friends);
    return Friends;
}());

//# sourceMappingURL=friends.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map