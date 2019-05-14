import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DebtService } from 'src/app/services/debt.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

  productsForm: FormGroup;
  submitted = false;

  productsList:Array<any>=new Array<any>();
  constructor(private formBuilder: FormBuilder,private router: Router, private debtService:DebtService
    ,private authService: AuthenticationService) { }

  ngOnInit() {
    this.productsForm = this.formBuilder.group({
      productOption: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.productsForm.controls; }


  readProductsInDebtList() {
    this.debtService.getProductsInDebtList()
      .subscribe(
        item => {
          this.productsList = Array<any>();
          if (item.hasOwnProperty('listaGenericaResult')) {
            const elementList = item['listaGenericaResult'];
            elementList.forEach(element => {
              let elementProduct: any = {};
              elementProduct.accountCode = element['Id'];
              this.productsList.push(elementProduct);
            });
            // console.log(this.filesDirectory);
          }
        }, error => {
          if (error['statusText'] == 'Unauthorized' && error['status'] == 401){             
            this.authService.clearAuthentication();
            this.router.navigate(['/login']);
          }
        });

    
  }

}
