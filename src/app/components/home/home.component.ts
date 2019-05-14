import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbTabsetConfig] 
})
export class HomeComponent implements OnInit {

  constructor(config: NgbTabsetConfig,private router: Router,private auth: AuthenticationService) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
    
  }

  getIdentificationClass(){
    if(this.router.url.includes("/identification",0)){
      return "active";
    }
    return "";
  }

  getCheckDebtClass(){
    if(this.router.url.includes("/checkDebt",0)){
      return "active";
    }
    return "";
  }

  getAgreementClass(){
    if(this.router.url.includes("/agreementOptions",0)){
      return "active";
    }
    return "";
  }

  getDiscountClass(){
    if(this.router.url.includes("/discount",0)){
      return "active";
    }
    return "";
  }
  isDiscount(){
    if(this.router.url.includes("/discount",0)){
      return true;
    }
    return false;
  }

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }
}
