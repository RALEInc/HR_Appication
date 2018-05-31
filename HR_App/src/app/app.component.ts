import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { personalInformation} from '../pages/Personal Information/personalInformation';
import { Address } from '../pages/address/address';
import { Leave} from '../pages/leave/leave';
import { Training } from '../pages/training/training';
import { Payslip } from '../pages/payslip/payslip';
import {ChangePassword} from '../pages/changePassword/changePassword';

import { Logout} from '../pages/logout/logout';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  
  userData:any = JSON.stringify(sessionStorage.getItem("UserDetails"));
  firstName: string = "Mat";
  name: string;
  count:number = 0;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // if(sessionStorage.getItem("UserDetails") == null){
    //   this.nav.push(LoginPage);
    // }
    // else{
    //   this.nav.push(HomePage);
    // }

    // used for an example of ngFor and navigation inside the App
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Personal Information', component :personalInformation},
      { title: 'Address', component :Address},
      { title: 'Leave',component :Leave },
      { title: 'Trainings', component :Training},
      { title: 'Pay Slips', component: Payslip},
      { title: 'Change Password',component: ChangePassword },
      { title: 'Log Out', component: Logout}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
