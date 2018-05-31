import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
    templateUrl: 'logout.html'
})

export class Logout{
    constructor(public navCrtl : NavController){
      sessionStorage.clear();
      this.navCrtl.push(LoginPage);
    }
  }