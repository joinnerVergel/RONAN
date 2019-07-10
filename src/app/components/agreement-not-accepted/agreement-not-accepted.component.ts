import { Component, OnInit } from '@angular/core';
import { DebtService } from 'src/app/services/debt.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agreement-not-accepted',
  templateUrl: './agreement-not-accepted.component.html',
  styleUrls: ['./agreement-not-accepted.component.css']
})
export class AgreementNotAcceptedComponent implements OnInit {

  text_error:string=null;
  constructor(private modalService: NgbModal,private debtService: DebtService,private router:Router,private auth: AuthenticationService) { }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/identification']);
    }
  }

  redirect(){
    this.cleanAuthentication();
    window.location.href="https://www.movistar.co/atencion-al-cliente/chat-asistente-virtual"; 
  }

  cleanAuthentication(){
    if(this.auth.obj_Authentication.token!=null){
      this.auth.cleanAuthentication()
          .subscribe(
          respuesta => {
            if (respuesta["State"]) {
              // console.log("Token Invalidado")
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
