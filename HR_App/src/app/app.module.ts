import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { personalInformation } from '../pages/Personal Information/personalInformation';
import { Address } from '../pages/address/address';
import { Leave } from '../pages/leave/leave';
import { Training } from '../pages/training/training';
import { Payslip } from '../pages/payslip/payslip';
import { ChangePassword } from '../pages/changePassword/changePassword';
import { Logout} from '../pages/logout/logout';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    Leave,
    personalInformation,
    Address,
    Training,
    Payslip,
    ChangePassword,
    Logout
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    personalInformation,
    Address,
    Leave,
    Training,
    Payslip,
    ChangePassword,
    Logout
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
