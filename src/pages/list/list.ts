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

  clickLight(){
    if((<HTMLElement>document.querySelector('#btnLight')).style.color!="red")
      (<HTMLElement>document.querySelector('#btnLight')).style.color="red";
    else
    (<HTMLElement>document.querySelector('#btnLight')).style.color="black";
  }

}
