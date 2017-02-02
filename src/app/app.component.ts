import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// start page and tabspage
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

// Pages
import { MyGitPage } from '../pages/my-git/my-git';
import { ReposPage } from '../pages/repos/repos';
import { AllReposPage } from '../pages/all-repos/all-repos';
import { RepoDetailsPage } from '../pages/repo-details/repo-details';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild('myNav') nav: NavController
  rootPage = HomePage;

  constructor(public platform: Platform,  public menu: MenuController) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
