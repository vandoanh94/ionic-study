import { Component } from '@angular/core';
import { Platform, NavController} from 'ionic-angular'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Vibration } from '@ionic-native/vibration';
import { RemoteService } from '../../providers/remote-service/remote-service';
import { Observable} from 'rxjs/Rx';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  light = "null";
  constructor(private localNotifications:LocalNotifications, private platform:Platform,
  private vibration:Vibration,private remoteService : RemoteService,
  public navCtrl: NavController) {
    Observable.interval(5000).subscribe(x => {
      this.getLightState();
    });
  }
  getLightState(){
    this.remoteService.getLightState().subscribe((data)=>{
        this.light = data.last_value;
    });
}

  btnListDevices() {
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
  i = 1;
  doorClick(){
    if (this.i % 2 != 0)
      document.getElementById("homeMidDoor").style.backgroundImage  = "url('/assets/imgs/door-open.jpg')";
    else
      document.getElementById("homeMidDoor").style.backgroundImage  = "url('/assets/imgs/door-close.jpg')";
    this.i ++;
    }
}
