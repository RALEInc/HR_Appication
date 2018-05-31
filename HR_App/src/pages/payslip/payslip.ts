import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Logout } from '../logout/logout';

@Component({
    selector: 'page-payslip',
    templateUrl: 'payslip.html'
})

export class Payslip{
    constructor(public navCtrl:NavController){
        console.log("Payslip page running");
    }

    firstName: string = "Mat";
    Logout(){
        this.navCtrl.push(Logout);
    }
}