import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {


  @Input() description :string;
  @Input() note :string;
  @Input() question :string;
  @Output() result:EventEmitter<number>=new EventEmitter<number>();
    
  

  constructor(public auth: AuthenticationService) {}

  ngOnInit() {
  }

  cancel():void{
    this.result.emit(1);
  }
  confirm():void{
    this.result.emit(2);
  }

  notAccept(){
    this.result.emit(3);
  }


}
