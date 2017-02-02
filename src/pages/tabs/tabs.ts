import { Component } from '@angular/core';
import { App, NavController, Tabs } from 'ionic-angular';

// Pages for tabs
import { HomePage } from '../home/home';
import { MyGitPage } from '../my-git/my-git';
import { ReposPage } from '../repos/repos';
import { AllReposPage } from '../all-repos/all-repos';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  //@ViewChild("paymentTabs") paymentTabs: Tabs;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ReposPage;
  tab3Root: any = AllReposPage;
  tab4Root: any = MyGitPage;

  constructor(public nav: NavController, private app: App ) {
    //console.log(this.app.getRootNav().getActiveChildNav());
  }
  /**goHome():void {
    this.app.getRootNav().pop()
  }
  selectTab(index: number) {
      var t: Tabs = this.nav.parent;
      t.select(index);
  }*/
  
}
