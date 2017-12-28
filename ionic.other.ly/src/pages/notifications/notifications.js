var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
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
        IonicPage(),
        Component({
            selector: 'page-notifications',
            templateUrl: 'notifications.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, InAppBrowser])
    ], NotificationsPage);
    return NotificationsPage;
}());
export { NotificationsPage };
//# sourceMappingURL=notifications.js.map