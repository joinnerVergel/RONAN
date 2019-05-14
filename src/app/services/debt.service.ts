import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { mf_getReasonNotPayment, mf_getMaxDayAgreement, mf_getDiscounts, mf_setAgreement } from './url';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http: HttpClient ,private authService: AuthenticationService) { }

  getProductsInDebtList(){
    return this.http.get("",this.authService.getHttpOptions());
  }
  getNotPaymentOptions(){
    return this.http.get(mf_getReasonNotPayment,this.authService.getHttpOptions());
  }
  getMaxDayAgreement(){
    return this.http.get(mf_getMaxDayAgreement,this.authService.getHttpOptions());
  }
  getDicounts(){
    return this.http.get(mf_getDiscounts,this.authService.getHttpOptions());
  }

  setAgreement(){
    if(this.authService.dataAgreement.Descuento==null){
      this.authService.dataAgreement.Descuento=0;
    }
    return this.http.post<any>(mf_setAgreement, this.authService.dataAgreement, this.authService.getHttpOptions()).pipe();
  }
}
