import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePageFriend } from '../pages/home/home';
import { HomePage } from '../pages/more/home';
import { HomeFeedPage } from '../pages/home-feed/home-feed';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { Friends } from '../pages/friends/friends';
import { ShareWithFriendsPage } from '../pages/share-with-friends/share-with-friends';
import { PostShareWithFriendsPage } from '../pages/share-with-friends/post-share-with-friends';
//import { ChangeRatePopoverPage } from '../pages/friends/change-rate-popover';


import { ConversationsPage } from '../pages/conversations/conversations';
import { ConversationDetailsPage } from '../pages/conversations/conversation-details';
import { CreateConversationNewPage } from '../pages/conversations/create-conversation-new';
import { CreateConversationPage } from '../pages/conversations/create-conversation';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';

//COMPONENTS
import { SharePopoverComponent } from '../components/share-popover/share-popover';
import {IonTagsInputModule} from "ionic-tags-input";


//Providers
import { Facebook } from "@ionic-native/facebook";
//import {GooglePlus} from '@ionic-native/google-plus';
import { GooglePlus } from '@ionic-native/google-plus';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocaldataProvider } from '../providers/localdata/localdata';
import { OtherlyApiProvider } from '../providers/otherly-api/otherly-api';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomeFeedPage,
    PostDetailPage,
    HomePage,
    HomePageFriend,
    Friends,
    ShareWithFriendsPage,
    PostShareWithFriendsPage,
    //ChangeRatePopoverPage,
    ConversationsPage,
    ConversationDetailsPage,
    CreateConversationPage,
    CreateConversationNewPage,
    NotificationsPage,
    MorePage,
    TabsPage,
    SharePopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: "true"}),
    HttpModule,
    IonTagsInputModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomeFeedPage,
    PostDetailPage,
    HomePage,
    HomePageFriend,
    Friends,
    ShareWithFriendsPage,
    PostShareWithFriendsPage,
    //ChangeRatePopoverPage,
    ConversationsPage,
    ConversationDetailsPage,
    CreateConversationPage,
    CreateConversationNewPage,
    NotificationsPage,
    MorePage,
    TabsPage,
    SharePopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocaldataProvider,
    InAppBrowser,
    GooglePlus,
    Facebook,
    SocialSharing,
    OtherlyApiProvider
    
    
  ]
})
export class AppModule {}
