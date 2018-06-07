import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RemoteService } from '../../providers/remote-service/remote-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private devices;
  constructor(public navCtrl: NavController, public navParams: NavParams,private remoteService : RemoteService,
    public storage: Storage) {
      Observable.interval().subscribe(x => {
        this.storage.get('devices').then((val) => {
          this.devices = val;
          if((<HTMLElement>document.querySelector("#fireWarning"))!=null){
            if(val.fireWarning.value == "on"){
              let id = "#fireWarning";
              (<HTMLElement>document.querySelector(id)).style.display="block";
            }
            else{
              let id = "#fireWarning";
              (<HTMLElement>document.querySelector(id)).style.display="none";
            }
  
            if(val.trespassWarning.value == "on"){
              let id = "#trespassWarning";
              (<HTMLElement>document.querySelector(id)).style.display="block";
            }
            else{
              let id = "#trespassWarning";
              (<HTMLElement>document.querySelector(id)).style.display="none";
            }
  
            if(val.light.value == "on"){
              let id = "#light";
              (<HTMLElement>document.querySelector(id)).style.color="yellow";
              (<HTMLElement>document.querySelector(id)).style.backgroundColor="rgba(255, 214, 173, 0.3)";
            }
            else{
              let id = "#light";
              (<HTMLElement>document.querySelector(id)).style.color="#a3a2a2";
              (<HTMLElement>document.querySelector(id)).style.backgroundColor="transparent";
            }
  
            if(val.fan.value == "on"){
              let id = "#fan";
              (<HTMLElement>document.querySelector(id)).style.color="yellow";
              (<HTMLElement>document.querySelector(id)).style.backgroundColor="rgba(255, 214, 173, 0.3)";
            }
            else{
              let id = "#fan";
              (<HTMLElement>document.querySelector(id)).style.color="#a3a2a2";
              (<HTMLElement>document.querySelector(id)).style.backgroundColor="transparent";
            }
          }
          
        });
  
      });
  }

  clickBtn(event){
    let id = event.currentTarget.id;
    this.changeState(event.currentTarget.id);
  }

  changeState(id){
    let device = id;
    let value;
    if(device == "light"){
      if(this.devices.light.value == "on"){
        value = "off";
      }
      else{
        value = "on";
      }
    }
    /* if(device == "fan"){
      if(this.devices.fan.value == "on"){
        value = "off";
      }
      else{
        value = "on";
      }
    }
    if(device == "fireWarning"){
      if(this.devices.fireWarning.value == "on"){
        value = "off";
      }
      else{
        value = "on";
      }
    }
    if(device == "trespassWarning"){
      if(this.devices.trespassWarning.value == "on"){
        value = "off";
      }
      else{
        value = "on";
      }
    } */
    this.remoteService.putDeviceState(device,value);
  }

}
