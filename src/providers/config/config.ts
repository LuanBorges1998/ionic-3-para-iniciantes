import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  /* private config = {
    showSlide: false,
    name: "",
    username: ""
  } */

  constructor(public http: HttpClient) {

  }

  //Recupera os dados do localstorage
  getConfigData(): any{
    return localStorage.getItem(config_key_name);
  }

  //Grava os dados do localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    }

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(username){
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }

}
