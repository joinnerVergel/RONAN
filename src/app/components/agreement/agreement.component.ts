import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {

  constructor(private auth:AuthenticationService,private router: Router) { }

  ngOnInit() {
    this.authenticate();
  }

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }

  authenticate(){
    let data:any={};
    this.auth.getAuthentication(data)
        .subscribe(
          respuesta => {
            if (respuesta["State"]) {
              this.auth.setAuthentication(respuesta["Data"]) ;
            }
          }
          , error => {
            console.log("Error", error);
          }
        );
  }

}
