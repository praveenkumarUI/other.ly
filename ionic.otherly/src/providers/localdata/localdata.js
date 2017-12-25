var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { OtherlyApiProvider } from '../../providers/otherly-api/otherly-api';
/*
  Generated class for the LocaldataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LocaldataProvider = /** @class */ (function () {
    function LocaldataProvider(http, OtherlyApi) {
        this.http = http;
        this.OtherlyApi = OtherlyApi;
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
        Injectable(),
        __metadata("design:paramtypes", [Http,
            OtherlyApiProvider])
    ], LocaldataProvider);
    return LocaldataProvider;
}());
export { LocaldataProvider };
//# sourceMappingURL=localdata.js.map