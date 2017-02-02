import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// import app
import { MyApp } from './app.component';

// start page and tabspage
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';

// Pages
import { MyGitPage } from '../pages/my-git/my-git';
import { ReposPage } from '../pages/repos/repos';
import { AllReposPage } from '../pages/all-repos/all-repos';
import { RepoDetailsPage } from '../pages/repo-details/repo-details';

// provider
import { GithubUsers } from '../providers/github-users';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MyGitPage,
    ReposPage,
    AllReposPage,
    RepoDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MyGitPage,
    ReposPage,
    AllReposPage,
    RepoDetailsPage
  ],
  providers: [GithubUsers, {provide: ErrorHandler, useClass: IonicErrorHandler}] // Add GithubUsers provider
})
export class AppModule {}
