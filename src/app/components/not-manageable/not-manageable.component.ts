import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-manageable',
  templateUrl: './not-manageable.component.html',
  styleUrls: ['./not-manageable.component.css']
})
export class NotManageableComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  redirect(){
    window.location.href="http://www.movistar.co/"; 
  }
}
