import { Component } from '@angular/core';
import { Platform, NavController} from 'ionic-angular'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Vibration } from '@ionic-native/vibration';
import { RemoteService } from '../../providers/remote-service/remote-service';
import { Observable} from 'rxjs/Rx';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  light = "null";
  constructor(private localNotifications:LocalNotifications, private platform:Platform,
  private vibration:Vibration,private remoteService : RemoteService,
  public navCtrl: NavController, public storage: Storage) {
    Observable.interval().subscribe(x => {
      this.getLightState();
    });
  }
  getLightState(){
    this.remoteService.getLightState().subscribe((data)=>{
        this.light = data.light;
        this.storage.set('light',this.light);
        console.log("storagelight-set",this.light);
    });
  }

  btnHomeRemote() {
    this.navCtrl.push(ListPage);
  }

  notification(){
    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        title:'THIS IS MY NOTIFICATION',
        text: 'Delayed ILocalNotification',
        trigger: {
          at: new Date(new Date().getTime()),
          vibrate: this.vibration.vibrate(6000)
        },
        led: 'FF0000',
        icon: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/24/bell-icon.png',
        sound: this.platform.is('android') ? 'file://assets/sounds/Warning.mp3': null,
     });
    });
  }
  clickDoorControl(){
    let doorSrc = (<HTMLImageElement>document.querySelector('#doorControl')).src;
    let doorState = doorSrc.search("open");
    if(doorState>0)
      (<HTMLImageElement>document.querySelector('#doorControl')).src = "/assets/imgs/home-item-icon-door-close.png";
    else
      (<HTMLImageElement>document.querySelector('#doorControl')).src = "/assets/imgs/home-item-icon-door-open.png";
  
    }
}
