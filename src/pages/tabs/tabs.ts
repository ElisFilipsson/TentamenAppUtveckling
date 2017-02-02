import { Component } from '@angular/core';
import { App, NavController, Tabs, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

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
  public tabIndex:Number = 1;

  constructor(public nav: NavController, private app: App, public params:NavParams ) {
    //console.log(this.app.getRootNav().getActiveChildNav());
    let tabIndex = this.params.get('tabIndex');
    if(tabIndex) {
      this.tabIndex = tabIndex;
    }
    if(this.tabIndex == 0){
      //this.tabIndex = tabIndex;
      this.nav.setRoot(null, {tabIndex: 1});

    }
  }
  /**tabSelected(tab: Tab) {
    console.log(this.nav.parent);
    console.log(tab.index);
}*/
  /**
  goHome():void {
    //this.app.getRootNav().pop();
    this.nav.popToRoot();
  }
  selectTab(index: number) {
      var t: Tabs = this.nav.parent;
      t.select(index);
  }*/
  
  
}
