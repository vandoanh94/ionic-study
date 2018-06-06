import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RemoteService } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  getApiUrl : string = "https://io.adafruit.com/api/v2/vandoanh94/feeds/light";
  postApiUrl: string = "https://io.adafruit.com/api/feeds/light/data.json?X-AIO-Key=55ad2001f57b45baaafb2e3e03e42045";
  constructor(public navCtrl: NavController, public navParams: NavParams,private remoteService : RemoteService,
    public storage: Storage) {
  
  }

  clickLight(event){
    let id = "#" + event.currentTarget.id;
    
    this.changeState(this.postApiUrl,id);
  }

  changeState(postApiUrl,id){
    let state = "";
    this.storage.get('light').then((val) => {
      state = val;
      console.log("storagelight-get",val)
    
    if(state == "off"){
      (<HTMLElement>document.querySelector(id)).style.color="yellow";
      (<HTMLElement>document.querySelector(id)).style.backgroundColor="rgba(255, 214, 173, 0.3)";
      state = "on";
    }
    else{
      (<HTMLElement>document.querySelector(id)).style.color="#a3a2a2";
      (<HTMLElement>document.querySelector(id)).style.backgroundColor="transparent";
      state = "off";
    }
    this.remoteService.postLightState(postApiUrl,state);
  });
  }

  clickWarning(event){
    let id = "#" + event.currentTarget.id;
    (<HTMLElement>document.querySelector(id)).style.display="none";
  }

}
