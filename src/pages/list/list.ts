import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RemoteService } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  body = {
    light:"",
    fan:"",
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private remoteService : RemoteService,
    public storage: Storage) {
  
  }

  clickLight(event){
    let id = "#" + event.currentTarget.id;
    
    this.changeState(id);
  }

  changeState(id){
    if( (<HTMLElement>document.querySelector(id)).style.color!="yellow"){
      (<HTMLElement>document.querySelector(id)).style.color="yellow";
      (<HTMLElement>document.querySelector(id)).style.backgroundColor="rgba(255, 214, 173, 0.3)";
      this.body.light = "on";
    }
    else{
      (<HTMLElement>document.querySelector(id)).style.color="#a3a2a2";
      (<HTMLElement>document.querySelector(id)).style.backgroundColor="transparent";
      this.body.light = "off";
    }
    this.remoteService.postLightState(this.body);
  }

  clickWarning(event){
    let id = "#" + event.currentTarget.id;
    (<HTMLElement>document.querySelector(id)).style.display="none";
  }

}
