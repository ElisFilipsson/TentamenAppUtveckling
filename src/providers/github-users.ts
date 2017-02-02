import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { Repo } from '../models/repo';

@Injectable()
export class GithubUsers {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => <User[]>res.json());
  }
  // Get github user by providing username
  getUser(username: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${username}`)
      .map(res => <User>(res.json()))
  }
  // Get users public repo by providing reponame
  getRepo(name: string, username: string): Observable<Repo> {
    return this.http.get(`${this.githubApiUrl}/repos/${username}/${name}`)
      .map(res => <Repo>(res.json()))
  }
  getAllRepos(): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/repositories`)
      .map(res => <Repo[]>(res.json()))
  }
  // Get github followers for specific user by providing username
  listFollowers(username: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${username}/followers`)
      .map(res => <User>(res.json()))
  }
  // Get github repositories for specific user by providing username
  listRepositories(username: string): Observable<Repo> {
    return this.http.get(`${this.githubApiUrl}/users/${username}/repos`)
      .map(res => <Repo>(res.json()))
  }
  // Search for github users  
  /**searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`) 
      .map(res => <User[]>(res.json().items))
  }*/
}