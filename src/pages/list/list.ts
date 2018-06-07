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

  constructor(public navCtrl: NavController, public navParams: NavParams,private remoteService : RemoteService,
    public storage: Storage) {
  }

  clickLight(event){
    let id = event.currentTarget.id;
    this.changeState(event.currentTarget.id);
  }

  changeState(eid){
    let id = "#" + eid;
    let device = eid;
    let value;
    if( (<HTMLElement>document.querySelector(id)).style.color!="yellow"){
      (<HTMLElement>document.querySelector(id)).style.color="yellow";
      (<HTMLElement>document.querySelector(id)).style.backgroundColor="rgba(255, 214, 173, 0.3)";
      value = "on";
    }
    else{
      (<HTMLElement>document.querySelector(id)).style.color="#a3a2a2";
      (<HTMLElement>document.querySelector(id)).style.backgroundColor="transparent";
      value = "off";
    }
    this.remoteService.putDeviceState(device,value);
  }

  clickWarning(event){
    let value ="off";
    let id = "#" + event.currentTarget.id;
    (<HTMLElement>document.querySelector(id)).style.display="none";
    this.remoteService.putDeviceState(event.currentTarget.id,value);
  }

}
