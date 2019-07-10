import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { mf_getReasonNotPayment, mf_getMaxDayAgreement, mf_getDiscounts, mf_setAgreement, urlMiddleLayer } from './url';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http: HttpClient ,private authService: AuthenticationService) { }

  getProductsInDebtList(){
    let datos:any={
      url:"",
      metodo:"get",
      token: this.authService.obj_Authentication.token
    }
    return this.http.post<any>(urlMiddleLayer,datos,this.authService.getHttpOptions());
  }
  getNotPaymentOptions(){
    let datos:any={
      url:mf_getReasonNotPayment,
      metodo:"get",
      token: this.authService.obj_Authentication.token
    }
    return this.http.post<any>(urlMiddleLayer,datos,this.authService.getHttpOptions());
  }
  getMaxDayAgreement(){
    let datos:any={
      url:mf_getMaxDayAgreement,
      metodo:"get",
      token: this.authService.obj_Authentication.token
    }
    return this.http.post<any>(urlMiddleLayer,datos,this.authService.getHttpOptions());
  }

  getDicounts(){
    let datos:any={
      url:mf_getDiscounts,
      metodo:"get",
      token: this.authService.obj_Authentication.token
    }
    return this.http.post<any>(urlMiddleLayer,datos,this.authService.getHttpOptions());
  }

  setAgreement(){
    if(this.authService.dataAgreement.Descuento==null){
      this.authService.dataAgreement.Descuento=0;
    }
    let datos:any={
      url:mf_setAgreement,
      objeto:this.authService.dataAgreement,
      metodo:"post",
      token: this.authService.obj_Authentication.token
    }
    return this.http.post<any>(urlMiddleLayer, datos , this.authService.getHttpOptions()).pipe();
  }
}
