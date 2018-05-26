import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteService {
  getApiUrl : string = "https://io.adafruit.com/api/v2/vandoanh94/feeds/light";
  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  getLightState() {
    return  this.http.get(this.getApiUrl)
            .do((res : Response ) => console.log(res.json()))
            .map((res : Response ) => res.json());
  }
}
