import { Component } from '@angular/core';
import { AlertController, Platform} from 'ionic-angular'
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private localNotifications:LocalNotifications) {

  }

  scheduleNotification(){

  }
}
