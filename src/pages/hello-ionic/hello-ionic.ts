import { Component } from '@angular/core';
import {Platform} from 'ionic-angular'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Vibration } from '@ionic-native/vibration';
import { RemoteService } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  light = "null";
  constructor(private localNotifications:LocalNotifications, private platform:Platform,
  private vibration:Vibration,private remoteService : RemoteService) {
    this.getLightState();
  }
  getLightState(){
    this.remoteService.getLightState().subscribe((data)=>{
        this.light = data.last_value;
    });
}

  btnPushClick(){
    let TIME_IN_MS = 10000;
    let hideFooterTimeout = setTimeout( () => {
      this.notification();
    }, TIME_IN_MS);
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
}
