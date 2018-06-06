import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items = [];
  light = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage) {
      this.items = [{
        'title': 'Angular',
        'icon': 'angular',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'color': '#0CA9EA'
      },
      {
        'title': 'HTML5',
        'icon': 'html5',
        'color': '#F46529'
      }
    ];
  }

  clickLight(event){
    this.storage.get('light').then((val) => {
      this.light = val;
      console.log("storagelight-get",this.light)
    });

    let id = "#" + event.currentTarget.id;
    if((<HTMLElement>document.querySelector(id)).style.color!="red"){
      (<HTMLElement>document.querySelector(id)).style.color="red";
      (<HTMLElement>document.querySelector(id)).style.backgroundColor="rgba(255, 214, 173, 0.3)";
    }
    else{
      (<HTMLElement>document.querySelector(id)).style.color="white";
      (<HTMLElement>document.querySelector(id)).style.backgroundColor="transparent";
    }
  }

}
