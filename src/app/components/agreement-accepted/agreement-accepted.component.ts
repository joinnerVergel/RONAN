import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agreement-accepted',
  templateUrl: './agreement-accepted.component.html',
  styleUrls: ['./agreement-accepted.component.css']
})
export class AgreementAcceptedComponent implements OnInit {

  withDiscount:boolean=false;
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      if(this.authService.dataAgreement.Descuento!=0){
        this.withDiscount=true;
      }else{
        this.withDiscount=false;
      }
      
    }else{
      this.router.navigate(['/identification']);
    }
    
  }

  redirect(){
    this.cleanAuthentication();
    window.location.href="https://www.movistar.co/atencion-al-cliente/chat-asistente-virtual"; 
  }

  redirectEpayco(){
    this.cleanAuthentication();
    window.location.href="https://movistar.recaudo.epayco.co"; 
  }
  cleanAuthentication(){
    if(this.authService.obj_Authentication.token!=null){
      this.authService.cleanAuthentication()
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
            this.authService.clearAuthentication();
          }
        );
    }
  }
}
