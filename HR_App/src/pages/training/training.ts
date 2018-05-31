import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Logout } from '../logout/logout';


@Component({
    selector:'page-selector',
    templateUrl:'training.html'
})

export class Training{

    constructor(public navCtrl:NavController,private http: Http){
        console.log("training page running");
        this.GetEmployees();
    }

    firstName: string = "Mat";
    Logout(){
        this.navCtrl.push(Logout);
    }

    GetEmployees() {
        console.log("Login Function Runnning");
        //this.NavCntrl.push(HomePage);
        let apiURL = "http://leaveyapi.azurewebsites.net/api/employee";

        this.http.get(apiURL)
            .map(res => res.json())
            .subscribe(data => {

                if (data[0] != null) {
                    console.log("Employees==>",data);
                   alert("Got the data");
                    
                }
                else {
                    alert("Got the data");
                }

            }, error => {
                console.log("Login Error -----", error);// Error getting the data
            });

    }
}