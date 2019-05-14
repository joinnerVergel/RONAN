import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DebtService } from 'src/app/services/debt.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reason-not-payment',
  templateUrl: './reason-not-payment.component.html',
  styleUrls: ['./reason-not-payment.component.css']
})
export class ReasonNotPaymentComponent implements OnInit {

  notPaymentOptionsForm:FormGroup;
  notPaymentOptions:Array<any>=[]
  constructor(private formBuilder: FormBuilder, private router:Router,private debtService :DebtService
    ,public auth:AuthenticationService) { }

  ngOnInit() {
    this.notPaymentOptionsForm = this.formBuilder.group({
      optionNotPayment: [1, Validators.required],
    });
    if(this.auth.isAuthenticated()){
      this.loadNotPaymentOptions();
    }
    else{
      this.router.navigate(['/identification']);
    }
  }

    // convenience getter for easy access to form fields
    get f() { return this.notPaymentOptionsForm.controls; }
    
  redirectAgreement(){
    this.auth.dataAgreement.IdMotivoNoPago=this.f.optionNotPayment.value;
    this.router.navigate(['/agreementOptions']);
  }

  loadNotPaymentOptions(){
    this.debtService.getNotPaymentOptions()
      .subscribe(
        item => {
          if (item.hasOwnProperty('ListarMotivosNoPagoResult')) {
            this.notPaymentOptions = item['ListarMotivosNoPagoResult'];
          }
        }, error => {
          if (error['statusText'] == 'Unauthorized' && error['status'] == 401) {
            this.auth.clearAuthentication()
            this.router.navigate(['/identification']);
          }
        });
  }

  backToIdentification(){
    this.auth.clearAuthentication();
    this.router.navigate(['/identification']);
  }
}
