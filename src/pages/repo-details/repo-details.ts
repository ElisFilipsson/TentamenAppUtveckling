import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

// Pages
import { Repo } from '../../models/repo';

// Provider
import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})
export class RepoDetailsPage {
  repo: Repo;
  name: string;
  login: string;
  title: string;

  constructor(public nav: NavController, public navParams: NavParams, private githubUsers: GithubUsers, private app: App ) {
    this.name = navParams.get('name');
    this.login = navParams.get('login');
    this.title = localStorage.getItem('user');
    if(this.login == null) {
        var temp = this.title;
    } else {
        var temp = this.login;
    }
    githubUsers.getRepo(this.name, temp).subscribe(repo => {
      this.repo = repo;
      //console.log(repo);
    })
  }
  goBack():void {
    this.nav.pop()
  }
}


