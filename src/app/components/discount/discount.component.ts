import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DebtService } from 'src/app/services/debt.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  submitted = false;
  discountOptionsForm:FormGroup;
  discountOptions:Array<any>=[];
  discountSelected:number=null;
  daysDiscountSelected:number=null
  valueWithDiscount:number=null;
  text_discount:string=null;
  text_error:string=null;
  constructor(private formBuilder: FormBuilder, private router:Router,private modalService: NgbModal,
    public auth: AuthenticationService,private debtService: DebtService) { }


  ngOnInit() {
    this.discountOptionsForm = this.formBuilder.group({
      optionDiscount: ['', Validators.required],
    });
    if(this.auth.isAuthenticated()){
      this.readDiscounts();
      this.valueWithDiscount=this.auth.obj_Authentication.saldo;
    }
    else{
      this.router.navigate(['/identification']);
    }

  }

   // convenience getter for easy access to form fields
   get f() { return this.discountOptionsForm.controls; }

  Validation() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.discountOptionsForm.invalid) {
       return false;
    }
    return true;
  }

  getValueWithDiscount(){
    // console.log(this.auth.obj_Authentication.saldo);
    this.valueWithDiscount=this.auth.obj_Authentication.saldo -(+this.auth.obj_Authentication.saldo*this.f.optionDiscount.value/100);
  }

  changeSelected(x: number){
    this.daysDiscountSelected=x;
  }
  changeDiscount(){
    this.getValueWithDiscount();
    this.text_discount="Movistar te informa que el saldo a pagar con el descuento elegido es de $"+this.valueWithDiscount+" el cual debe cancelarce en un plazo maximo de "+this.daysDiscountSelected+" días.";
  }

  backToAgreement(){
    this.router.navigate(['/agreementOptions']);
  }

  open(content) {
    let validate: boolean = this.Validation();
    if(validate){
      this.changeDiscount();
      this.auth.dataAgreement.DiasSuspensionGestion=this.daysDiscountSelected;
      this.auth.dataAgreement.Descuento=this.f.optionDiscount.value;
      this.modalService.open(content);
      // console.log(this.auth.dataAgreement);
    }
  }

  action(x: number,contentError){
    this.modalService.dismissAll();
    if(x==2){
      this.setAgreement(contentError);
    }
    if(x==3){
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
  
  readDiscounts() {
    this.debtService.getDicounts()
      .subscribe(
        respuesta => {
          if (respuesta.hasOwnProperty('ObtenerDescuentoAplicableResult')) {
            this.discountOptions = respuesta["ObtenerDescuentoAplicableResult"];
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
