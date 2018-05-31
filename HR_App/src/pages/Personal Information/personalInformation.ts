import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import { Logout } from '../logout/logout';

@Component({
    selector:'page-personalInformation',
    templateUrl:'personalInformation.html'
})

export class personalInformation{

    name:string = "Mat";
    surname: string = "Lesh" ;
    dob: string  = "1993-10-10";
    idNumber: string = "931010589343";
    gender: string = "Male";
    maritalStatus: string = "Single";
    email: string = "matlesh@gmail.com";
    contactNumber: string = "071 111 1111";

    constructor( public navCtrl:NavController){
        console.log("Personal Information page running");
    }
    
    firstName: string = "Mat";
    Logout(){
        this.navCtrl.push(Logout);
    }
}