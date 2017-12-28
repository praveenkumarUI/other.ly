import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events, App, Platform , PopoverController} from 'ionic-angular';




//Otherly API connection


@Component({
  selector: 'page-change',
  templateUrl: 'change-rate-popover.html',
})


export class ChangeRatePopoverPage {
  user: string;
	rate: number;

	//@ViewChild(Content) content: Content;

	constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
  				public events: Events,
          public app: App,
          private PopOverCtrl: PopoverController) {
    this.user = this.navParams.get('username');
    this.rate = this.navParams.get('rate');


  }

 

  
}
