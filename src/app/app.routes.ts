import { Routes } from '@angular/router';
import { LoginComponent } from './login-page/login.component';
import { MainComponent } from './main-layout-page/main.component';
import { LoanMainComponent } from './loan-main-page/loan-main.component';
import { SavingMainComponent } from './saving-page/saving-main.component';
import { PayPhoneComponent } from './pay-phone-page/pay-phone.component';
import { PayPhone2Component } from './pay-phone-page-2/pay-phone-2.component';
import { PayPhone3Component } from './pay-phone-page-3/pay-phone-3.component';
import { CharityComponent } from './charity-page/charity.component';
import { TransferComponent } from './transfer-page/transfer.component';
import { Transfer2Component } from './transfer-page-2/transfer-2.component';
import { Transfer3Component } from './transfer-page-3/transfer-3.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second-layout-page/second.component';


export const routes: Routes = [
    { path: '' , redirectTo: 'login' , pathMatch: 'full'},
    { path: '' , component: MainComponent,
        children:[
            { path: 'home' , component: HomeComponent},
            { path: 'layout-2' , component: SecondComponent},
            { path: 'loan', component: LoanMainComponent},
            { path: 'saving', component: SavingMainComponent},
            { path: 'transfer', component: TransferComponent},
            { path: 'transfer-2', component: Transfer2Component},
            { path: 'transfer-3', component: Transfer3Component},
            { path: 'pay-phone', component: PayPhoneComponent},
            { path: 'pay-phone2', component: PayPhone2Component},
            { path: 'pay-phone3', component: PayPhone3Component},
            { path: 'charity', component: CharityComponent},
        ]
    },
    { path: 'login' , component: LoginComponent},
    { path: 'main' , component: MainComponent}
];
