import { Component } from '@angular/core';
import { App, NavController, Tabs } from 'ionic-angular';

// Provider
import { GithubUsers } from '../../providers/github-users';

// Pages
import { RepoDetailsPage } from '../repo-details/repo-details';

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  reposit : any = [];
  title: string;


  constructor(public nav: NavController, private githubUsers: GithubUsers, private app: App ) {
    this.title = localStorage.getItem('user');
    localStorage.setItem('rep', 'true');
    githubUsers.listRepositories(this.title).subscribe(repos => {
      this.reposit = repos;
      console.log(this.reposit);
    })
  }
  goBack():void {
    this.nav.pop()
  }
  goToDetails(name: string) {
    this.nav.push(RepoDetailsPage, {name});
  }
}