import { Component } from '@angular/core';
import {Platform} from 'ionic-angular'
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private localNotifications:LocalNotifications, private platform:Platform) {

  }

  btnPushClick(){
    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        title:'THIS IS MY NOTIFICATION',
        text: 'Delayed ILocalNotification',
        trigger: {at: new Date(new Date().getTime() + 3600)},
        led: 'FF0000',
        icon: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/24/bell-icon.png',
        sound: null
     });
    });
  }
}
