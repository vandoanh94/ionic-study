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
  constructor(public http: Http) {
  }
  getApiUrl = "https://iot-rest-api.firebaseio.com/devices.json";
  getLightState() {
    return  this.http.get(this.getApiUrl)
            .do((res : Response ) => console.log(res.json()))
            .map((res : Response ) => res.json());
  }

  postLightState(body) {
    return  this.http.put(this.getApiUrl,body).subscribe(res => console.log(res.json()));
  }
}
