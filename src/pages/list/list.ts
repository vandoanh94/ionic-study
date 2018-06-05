import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage) {
      this.storage.get('items').then((val) => {
        this.items = val;
      });
  }

  btnUpdateItems(){
    this.storage.set('items', [
      {
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
      },
    ]);

    this.storage.get('items').then((val) => {
      this.items = val;
    });
  }

  btnAddItem(){
    this.storage.get('items').then((val) => {
      val.push({
        'title': 'HTML55',
        'icon': 'html5',
        'color': '#F46529'
      });
      this.storage.set('items',val);
      this.items = val;
    });
  }

  btnDeleteItem(){
    this.storage.get('items').then((val) => {
     val.forEach(element => {
       if(element.title == "HTML5"){
        val.splice(val.indexOf(element), 1);
       }
     });
      this.storage.set('items',val);
      this.items = val;
    });
  }
}
