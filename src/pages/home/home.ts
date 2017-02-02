import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

// Pages
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = {}

  constructor(public nav: NavController, public navParams: NavParams, private app: App ) {
    const user = localStorage.getItem('user');
    if (user !== 'undefined') {
      this.username['title'] = user;
    }
  }
  enteredName() {
    const title = this.username['title'];
    localStorage.setItem('user', title);
    this.nav.push(TabsPage);
  }
}
