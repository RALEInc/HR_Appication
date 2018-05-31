import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from 'ionic-angular'; 
import 'rxjs/add/operator/map';

import { Logout } from '../logout/logout'

@Component({
    selector:'page-address',
    templateUrl:'address.html'
})

export class Address{

    streetNumber:any;
    suburb:any;
    city:any;
    postalCode:any;
    province:any;
    country:any;

    streetError:boolean = false;
    suburbError:boolean = false;
    codeError:boolean = false;
    countryError:boolean = false;
    successChange: boolean = false;

    constructor(private http: Http,public navCtrl:NavController){
        console.log("address page running");
        //this.postUser();
    }

    firstName: string = "Mat";
    Logout(){
        this.navCtrl.push(Logout);
    }

   
    updateAddress(){

        let numVal=0;
        if(this.streetNumber ==null || this.streetNumber==""){
            numVal = 1;
            this.streetError = true;
        }
        if(this.suburb ==null || this.suburb==""){
            numVal = 1;
            this.suburbError = true
        }
        if(this.postalCode ==null || this.postalCode==""){
            numVal = 1;
            this.codeError = true;
        }
        if(this.country ==null || this.country==""){
            numVal = 1;
            this.countryError = true;
        }
        
        if(numVal == 1){
            return false;
        }

        else{
            //this.postAddress();
            this.successChange = true;
        }

    }

    //post address function
    postAddress(){
        console.log("post leave function running");

        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        //declare parameters
        let postParams = {
           'employeeID': 1,
           'streetNumber': this.streetNumber,
           'suburb': this.suburb,
           'city': this.city,
           'postalCode': this.postalCode,
           'provice': this.province,
           'country': this.country
        };
        
        //api url
        let apiPost = "";

        //post method
        this.http.put(apiPost, postParams, options)
            .map(res => res.json())
            .subscribe(data => {
                console.log("Address Info==>",data);

            }, error => {
                console.log("Address Posting Error -----", error);// Error getting the data
            });
    }

    postUser(){
        console.log("post user function running");

        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        //declare parameters
        let postParams = {
            "roleID": 1,
            "departmentID": 1,
            "firstName": "sample string 3",
            "lastName": "sample string 4",
            "DOB": "2018-05-30T18:56:01.3940774+02:00",
            "idNumber": "sample string 6",
            "cellNumber": "sample string 7",
            "email": "sample string 8",
            "password": "sample string 9",
            "annualLeaveBalance": 10,
            "medicalLeaveBalance": 11,
            "familyLeaveBalance": 12,
            "employmentStatus": true
          }
        
        //api url
        let apiPost = "http://localhost:61766/api/employee";

        //post method
        this.http.post(apiPost, postParams, options)
            .map(res => res.json())
            .subscribe(data => {
                console.log("user Info==>",data);

            }, error => {
                console.log("user Posting Error -----", error);// Error getting the data
            });
    }
    
   
    streetFocus(){
        this.streetError = false;
        this.successChange = false;
    }
    suburbFocus(){
        this.suburbError = false;
        this.successChange = false;
    }
    codeFocus(){
        this.codeError = false;
        this.successChange = false;
    }
    countryFocus(){
        this.countryError = false; 
        this.successChange = false; 
    }
}