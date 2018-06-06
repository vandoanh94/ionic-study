import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
