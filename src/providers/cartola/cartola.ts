import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartolaProvider {
  basepath = "/cartolaapi";
  constructor(
    public http: HttpClient,
    private _platform: Platform
  ) {
    if(this._platform.is("cordova")){
      this.basepath = "https://api.cartolafc.globo.com";
    }
  }

  atletas(){
    return this.http.get(`${this.basepath}/atletas/mercado`);
  }

}
