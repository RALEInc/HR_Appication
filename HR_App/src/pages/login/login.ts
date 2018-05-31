import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {

    employeeID: string;
    Password: string;
    data:any[];
    
    passwordError: Boolean = false;
    numberError: boolean = false;
    wrongUsernameOrPass: boolean = false;

    constructor(public NavCntrl: NavController, private http: Http) {
        console.log("Login page running");

    }

    LoginClick(){

        let numVal=0;
        
        if(this.employeeID == null || this.employeeID ==""){
            this.numberError = true;
            numVal = 1;
        }
        if(this.Password == null || this.Password ==""){
            this.passwordError = true;
            numVal = 1;
        }

        if(numVal == 1){
            return false
        }
        else{
            //this.loginFunction();
            this.NavCntrl.setRoot(HomePage);
        }
    }


    loginFunction() {
        console.log("Login Function Runnning");
        //this.NavCntrl.push(HomePage);
        let apiURL = "http://ralehr.azurewebsites.net/api/Login?username="+this.employeeID+"&password="+this.Password;

        this.http.get(apiURL)
            .map(res => res.json())
            .subscribe(data => {

                if (data[0] != null) {
                    this.data = data[0];
                    console.log(data[0].firstname);
                    sessionStorage.setItem("UserDetails",JSON.stringify(this.data));
                    this.NavCntrl.setRoot(HomePage,{data: this.data});
                    
                }
                else {
                    this.wrongUsernameOrPass = true;
                }

            }, error => {
                console.log("Login Error -----", error);// Error getting the data
            });

    }

    passFocus(){
        this.passwordError = false;
        this.wrongUsernameOrPass = false;
    }

    numFocus(){
        this.numberError = false;
        this.wrongUsernameOrPass = false;
    }
}

