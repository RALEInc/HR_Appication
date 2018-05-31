import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Logout } from '../logout/logout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetalis: any[];
  userName: any;
  

  constructor( public navCtrl: NavController) {
    console.log("Home Page Running");
    this.userDetalis = JSON.parse(sessionStorage.getItem("UserDetails"));
    console.log(this.userDetalis);
    //this.userName = this.navParams.get("data").firstname;

  }
  firstName: string = "Mat";
  Logout(){
      this.navCtrl.push(Logout);
  }


}



