import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WithOutDebtComponent } from './components/with-out-debt/with-out-debt.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CloudsComponent } from './components/clouds/clouds.component';
import { NotManageableComponent } from './components/not-manageable/not-manageable.component';
import { DebtComponent } from './components/debt/debt.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IdentificationComponent } from './components/identification/identification.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgreementOptionsComponent } from './components/agreement-options/agreement-options.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { ReasonNotPaymentComponent } from './components/reason-not-payment/reason-not-payment.component';
import { DiscountComponent } from './components/discount/discount.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AgreementNotAcceptedComponent } from './components/agreement-not-accepted/agreement-not-accepted.component';
import { AgreementAcceptedComponent } from './components/agreement-accepted/agreement-accepted.component';
import { ErrorAgreementComponent } from './components/error-agreement/error-agreement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WithOutDebtComponent,
    CloudsComponent,
    NotManageableComponent,
    DebtComponent,
    IdentificationComponent,
    AgreementOptionsComponent,
    AgreementComponent,
    ReasonNotPaymentComponent,
    DiscountComponent,
    ConfirmDialogComponent,
    AgreementNotAcceptedComponent,
    AgreementAcceptedComponent,
    ErrorAgreementComponent
  ],
  imports: [
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component:HomeComponent, children: [
        {path: '',redirectTo: 'identification', pathMatch: 'full'},
        {path:'identification', component:IdentificationComponent},
        {path:'reasonNotPayment', component:ReasonNotPaymentComponent},
        {path:'NotAuthenticated', component:WithOutDebtComponent},
        {path:'agreementOptions',component:AgreementOptionsComponent},
        {path:'discount', component:DiscountComponent},
        {path:'agreementNotAccepted',component:AgreementNotAcceptedComponent},
        {path:'agreementAccepted',component:AgreementAcceptedComponent},
      ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
