import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

// import model User
import { User } from '../../models/user';

// Pages
import { RepoDetailsPage } from '../repo-details/repo-details';

// provider
import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-all-repos',
  templateUrl: 'all-repos.html'
})
export class AllReposPage {
reposit : any = [];

  constructor(public nav: NavController, private githubUsers: GithubUsers, private app: App ) {
    // get all repositories from github, see provider GithubUsers
    githubUsers.getAllRepos().subscribe(repos => {
      this.reposit = repos;
    })
  }
  // push page into history/goto page, with parameters
  goToDetails(name: string, login: string) {
    this.nav.push(RepoDetailsPage, {name, login});
  }

  /**search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 2) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }*/
  goBack():void {
    this.nav.pop()
  }
}
