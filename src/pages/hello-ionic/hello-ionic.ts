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
  devices ;
  constructor(private localNotifications:LocalNotifications, private platform:Platform,
  private vibration:Vibration,private remoteService : RemoteService,
  public navCtrl: NavController, public storage: Storage) {
    Observable.interval(1000).subscribe(x => {
      this.getDevicesState();
    });
  }
  getDevicesState(){
    this.remoteService.getDevicesState().subscribe((data)=>{
        this.devices = data;
        this.storage.set('devices',data);
        if(data.door.value == "close" && (<HTMLImageElement>document.querySelector('#door'))!=null){
          (<HTMLImageElement>document.querySelector('#door')).src = "assets/imgs/home-item-icon-door-close.png";
        }
        else{
          (<HTMLImageElement>document.querySelector('#door')).src = "assets/imgs/home-item-icon-door-open.png";
        }
        
        if(data.fireWarning.value == "on"){
          this.notification();
        }
        
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
    let device = "door";
    let value;
    if(this.devices.door.value == "close"){
      value = "open";
    }
    else{
      value = "close";
    }
    
    this.remoteService.putDeviceState(device,value);  
  }
    
}
