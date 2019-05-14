import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { faMobileAlt, faIdCard, faIdCardAlt, faIdBadge, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  refIcon=faFileContract;
  idIcon=faIdBadge;
  phoneIcon=faMobileAlt;
  identificationForm :FormGroup;
  submitted = false;
  MobileNumberValidation:boolean=true;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router,
    private auth:AuthenticationService) { }

  ngOnInit() {

    this.identificationForm = this.formBuilder.group({
      operationSelectRadio: [1, Validators.required],
      identificationNumber: ['', Validators.required],
      paymentReference: ['', Validators.required],
      cellPhoneNumber: [''],
    });
    this.cleanAuthentication();

  }

  // convenience getter for easy access to form fields
  get f() { return this.identificationForm.controls; }

  Validation() {
    this.submitted = true;
    // stop here if form is invalid
    if(this.f.operationSelectRadio.value==1){
      if (this.identificationForm.invalid) {
        return false;
      }
    }
    if(this.f.operationSelectRadio.value==2 && (this.identificationForm.invalid || (this.f.cellPhoneNumber.value==null||this.f.cellPhoneNumber.value.trim()==""))){
      this.MobileNumberValidation=false;
      return false;
    }
    return true;
  }

  redirectCheckDebt(){
    let validate: boolean = this.Validation();
    if(validate){
      this.authenticate();
      
    }
  }

  authenticate(){
    let data:any={
      n_identificacion:this.f.identificationNumber.value,
      referenciaPago:this.f.paymentReference.value,
      idTipoOperacion:this.f.operationSelectRadio.value,
      celular:this.f.cellPhoneNumber.value
    };
    this.auth.getAuthentication(data)
        .subscribe(
          respuesta => {
            if (respuesta["State"]) {
              this.auth.setAuthentication(respuesta["Data"]) ;
              this.router.navigate(['/reasonNotPayment']);
            }else{
              this.router.navigate(['/NotAuthenticated']);
            }
          }
          , error => {
            this.router.navigate(['/NotAuthenticated']);
          },
        );
  }

  generalKeyPressEvent(key: string, limit: number, control: AbstractControl, validateStrangeCharacters: boolean) {

    if (control.value != null) {
      if (control.value.length > limit) {
        return false;
      }
    }
    if (validateStrangeCharacters) {
      let strangeCharacters: string = "|!#$%&/()=?¡¿'*+[]{}^-_:;,.´¨~`°¬<>\\\"@";
      if (strangeCharacters.indexOf(key) != -1) {
        console.log("Caracter Invalido " + key);
        return false;
      }
    }
    return true;
  }

  cleanAuthentication(){
    if(this.auth.obj_Authentication.token!=null){
      this.auth.cleanAuthentication()
          .subscribe(
          respuesta => {
            if (respuesta["State"]) {
              console.log("Token Invalidado")
            }else{
              console.log("Error", respuesta["Msg"]);
            }
          }
          , error => {
            console.log("Error", error);
          },
          ()=>{
            this.auth.clearAuthentication();
          }
        );
    }
  }
}
