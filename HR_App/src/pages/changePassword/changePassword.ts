import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Logout } from '../logout/logout';
import 'rxjs/add/operator/map';


@Component({
    selector: 'page-changePassword',
    templateUrl: 'changePassword.html'
})

export class ChangePassword {

    oldPassword: string;
    newPassword: string;
    confirmPassword: string;

    confirmPassError: boolean= false;
    newPassError: boolean= false;
    oldPassError: boolean= false;
    wrongOldPassError:boolean= false;
    passMustError:boolean=false;
    successChange:boolean = false;
    
    constructor(private http: Http, public navCtrl: NavController) {
        console.log("change Password page running");

    }

    firstName: string = "Mat";
    Logout(){
        this.navCtrl.push(Logout);
    }

    changePassword() {

        let numVal=0;

        if(this.oldPassword ==null || this.oldPassword =="" ){
            numVal = 1;
            this.oldPassError = true;
        }
        if(this.newPassword ==null || this.newPassword ==""){
            numVal = 1;
            this.newPassError = true;
        }
        if(this.confirmPassword ==null || this.confirmPassword==""){
            numVal = 1;
            this.confirmPassError = true;
        }

        if(numVal == 1){
            return false;
        }
        else{
            if(this.oldPassword != "123"){
                this.wrongOldPassError = true
            }
            else{
                if(this.newPassword != this.confirmPassword){
                    this.passMustError = true;
                }
                else{
                    this.successChange = true;
                    //this.ChangingPassword();
                }
            }
        }

    }

    ChangingPassword() {
        console.log("ChangingPassword function running");

        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        let postParams = {
            "employeeID": 1,
            "password": this.newPassword
        };

        let apiPost="";

        this.http.put(apiPost, postParams, options)
            .map(res => res.json())
            .subscribe(data => {
                console.log("Changing Password data==>", data);

            }, error => {
                console.log("Error Changing Password -----", error);// Error getting the data
            });
    }

    oldFocus(){
        this.oldPassError = false;
        this.wrongOldPassError = false;
        this.successChange = false;
    }

    newFocus(){
        this.newPassError = false;
        this.passMustError = false;
        this.successChange = false;
    }

    confirmFocus(){
        this.confirmPassError = false;
        this.passMustError = false;
        this.successChange = false;
    }

}