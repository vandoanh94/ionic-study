import { Component } from '@angular/core';
import {Platform} from 'ionic-angular'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private localNotifications:LocalNotifications, private platform:Platform,
  private vibration:Vibration) {

  }

  btnPushClick(){
    let TIME_IN_MS = 3000;
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
          vibrate: this.vibration.vibrate(5000)
        },
        led: 'FF0000',
        icon: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/24/bell-icon.png',
        sound: this.platform.is('android') ? 'file://assets/sounds/Warning.mp3': null,
     });
    });
  }
}
