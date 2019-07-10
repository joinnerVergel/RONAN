import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-error-agreement',
  templateUrl: './error-agreement.component.html',
  styleUrls: ['./error-agreement.component.css']
})
export class ErrorAgreementComponent implements OnInit {

  @Input() description :string;
  constructor(private router:Router,private auth: AuthenticationService) { }

  ngOnInit() {
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
  redirect(){
    this.cleanAuthentication();
    window.location.href="https://www.movistar.co"; 
  }
}
