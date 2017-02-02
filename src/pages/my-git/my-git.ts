import { Component, ViewChild, ElementRef } from '@angular/core';
import { App, NavController, Nav, NavParams } from 'ionic-angular';

// Model
import { User } from '../../models/user';

// Provider
import { GithubUsers } from '../../providers/github-users';
import { Geolocation } from 'ionic-native';
 
declare var google;

@Component({
  selector: 'page-my-git',
  templateUrl: 'my-git.html'
})
export class MyGitPage {
  public lat: any;
  public lon: any;
  username = {}
  //user: User;
  title: string;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public nav: NavController, public navParams: NavParams, private githubUsers: GithubUsers, private app: App ) {
    console.log(this.app.getRootNav().getActiveChildNav());
    /** 
    this.title = localStorage.getItem('user');
    
    githubUsers.getUser(this.title).subscribe(user => {
      this.username = user;
    })
    
    Geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
    });

    let watch = Geolocation.watchPosition().subscribe(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
    });

    // to stop watching
    watch.unsubscribe();*/
    this.loadMap();
  }

  ionViewLoaded(){
    this.loadMap();
    this.addMarker();
  }
 
  loadMap(){
    Geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      console.log(err);
    });
  }

  goBack():void {
    this.nav.pop()
  }

  addMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    console.log(marker.position);
    let content = "<h4>You are here!</h4>";          
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

}
