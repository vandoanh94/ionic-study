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
  putApiUrl = "https://iot-rest-api.firebaseio.com/devices/";
  getDevicesState() {
    return  this.http.get(this.getApiUrl)
            .map((res : Response ) => res.json());
  }

  putDeviceState(device,val) {
    let body = {
      value:val
    };
    return  this.http.put(this.putApiUrl+device+".json",body).subscribe(res => console.log(res.json()));
  }
}
