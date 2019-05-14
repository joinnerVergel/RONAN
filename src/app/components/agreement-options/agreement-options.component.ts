import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DebtService } from 'src/app/services/debt.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-agreement-options',
  templateUrl: './agreement-options.component.html',
  styleUrls: ['./agreement-options.component.css']
})
export class AgreementOptionsComponent implements OnInit {


  text_agreement: string;
  agreementOptionsForm: FormGroup;
  options: Array<number> = [];
  with_Discount: boolean = true;
  text_error:string=null;
  constructor(private formBuilder: FormBuilder, private router: Router, private debtService: DebtService
    , public auth: AuthenticationService, private modalService: NgbModal) { }

  ngOnInit() {
    this.agreementOptionsForm = this.formBuilder.group({
      optionDay: [1, Validators.required],
    });
    if (this.auth.isAuthenticated()) {
      this.with_Discount = this.auth.obj_Authentication.aplicaDescuento;
      this.readMaxDayAgreement();
      this.changeAgreement();
    }
    else {
      this.router.navigate(['/identification']);
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.agreementOptionsForm.controls; }

  redirectToDiscount() {
    this.router.navigate(['/discount']);
  }

  readMaxDayAgreement() {
    this.debtService.getMaxDayAgreement()
      .subscribe(
        respuesta => {

          if (respuesta.hasOwnProperty('MaximoDiasAcuerdoResult')) {
            let resp = respuesta["MaximoDiasAcuerdoResult"];
            if (resp["State"]) {
              this.options = [];

              for (var i = 1; i <= resp["Data"]; i++) {
                this.options.push(i);
              }

            }
          }
        }
        , error => {
          if (error['statusText'] == 'Unauthorized' && error['status'] == 401) {
            this.auth.clearAuthentication()
            this.router.navigate(['/identification']);
          }
        }
      );
  }

  changeAgreement() {
    this.text_agreement = "Movistar te informa que segun el acuerdo seleccionado debe cancelarce la totalidad del valor de la deuda ($" + this.auth.obj_Authentication.saldo + ") en un plazo maximo de " + this.f.optionDay.value + " día(s).";
  }

  open(content) {
    this.auth.dataAgreement.DiasSuspensionGestion = this.f.optionDay.value;
    this.auth.dataAgreement.Descuento = null;
    this.modalService.open(content);
    console.log(this.auth.dataAgreement);
  }

  backToReason() {
    this.router.navigate(['/reasonNotPayment']);
  }

  action(x: number,contentError) {
    this.modalService.dismissAll();
    if (x == 2) {
      this.setAgreement(contentError);
    }
    if (x == 3) {
      this.router.navigate(['/agreementNotAccepted']);
    }
  }

  setAgreement(contentError) {
    this.debtService.setAgreement()
      .subscribe(
        respuesta => {
            if (respuesta["State"]) {
              this.router.navigate(['/agreementAccepted']);
            }else{
              this.text_error=respuesta["Msg"].replace("ERROR: ","");
              this.modalService.open(contentError);
            }
        }
        , error => {
          if (error['statusText'] == 'Unauthorized' && error['status'] == 401) {
            this.auth.clearAuthentication()
            this.router.navigate(['/identification']);
          }
        }
      );
  }

}
