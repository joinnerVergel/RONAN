import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-with-out-debt',
  templateUrl: './with-out-debt.component.html',
  
  styleUrls: ['./with-out-debt.component.css']
})
export class WithOutDebtComponent implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  redirect(){
    window.location.href="https://www.movistar.co/atencion-al-cliente/chat-asistente-virtual"; 
  }
 
  backToIdentification(){
    this.router.navigate(['/identification']);
  }
  

}
