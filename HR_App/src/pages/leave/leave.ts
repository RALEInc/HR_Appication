import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Logout } from '../logout/logout';

@Component({
    selector: 'page-leave',
    templateUrl: 'leave.html'
})

export class Leave {

    annualBalance:number = 5;
    familyBalance:number = 15;
    sickBalance:number= 10;
    studyBalance:number = 5;

    dateFrom: Date;
    dateTo: Date ;
    leaveType: any;
    numberOfDays: number = 0;

    typeOfLeaveError:boolean  = false;
    dateFromError:boolean = false;
    dateToError:boolean = false;
    successfullyApplied: boolean = false;
    datesError: boolean = false;
    balanceError: boolean = false;

    constructor(private http: Http,public navCtrl:NavController) {
        console.log("leave page running");
    }

    firstName: string = "Mat";
    Logout(){
        this.navCtrl.push(Logout);
    }


    applyLeave() {
        
        let numVal = 0;
 
        if (this.leaveType == "" || this.leaveType == null) {
            numVal = 1;
            this.typeOfLeaveError = true;
        }
        if (this.dateFrom == null) {
            numVal = 1;
            this.dateFromError = true;
        }
        if (this.dateTo == null) {
            numVal = 1;
            this.dateToError = true;
        }

        let DaysSelected = this.getDateDifference(this.dateFrom, this.dateTo) + 1;

        if (numVal == 1) {
            return false;
        }
        else {
            
            if (this.dateFrom > this.dateTo) {
                this.datesError = true;
            }
            else { 
                 if(this.leaveType ==="Annual" && DaysSelected > this.annualBalance){
                     this.balanceError = true;
                 }
                 else if(this.leaveType ==="Family" && DaysSelected > this.familyBalance)
                 {
                    this.balanceError = true;   
                 }
                 else if(this.leaveType ==="Sick" && DaysSelected > this.sickBalance)
                 {
                    this.balanceError = true;   
                 }
                 else if(this.leaveType ==="Study" && DaysSelected > this.studyBalance)
                 {
                    this.balanceError = true;   
                 }

                 else{
                    this.successfullyApplied = true;
                    this.numberOfDays = DaysSelected;
                    //this.postLeave();
                 }   
            }
        }

    }

    //post leave function
    postLeave() {
        console.log("post leave function running");

        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        //declare parameters
        let postParams = {
            'leaveType': this.leaveType,
            'dateFrom': this.dateFrom,
            'dateTo': this.dateTo,
            'numberOfDays': this.numberOfDays
        };

        //api url
        let apiPost = "";

        //post method
        this.http.post(apiPost, postParams, options)
            .map(res => res.json())
            .subscribe(data => {
                console.log("Leave Info==>", data);

            }, error => {
                console.log("Leave Posting Error -----", error);// Error getting the data
            });
    }

    getDateDifference(date1, date2) {
        let dt1 = new Date(date1);
        let dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }

    selectFocus(){
        this.typeOfLeaveError = false;
        this.successfullyApplied = false;
        this.balanceError = false;
    }

    dateFromFocus(){
        this.dateFromError = false;
        this.successfullyApplied = false;
        this.datesError = false;
        this.balanceError = false;
        this.numberOfDays = 0;
    }

    dateToFocus(){
       this.dateToError = false; 
       this.successfullyApplied = false;
       this.datesError = false;
       this.balanceError = false;
       this.numberOfDays = 0;
    }

}
