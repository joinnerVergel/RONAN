import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

const t='1s';
@Component({
  selector: 'app-clouds',
  templateUrl: './clouds.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        right: '0px'
      })),
      state('closed', style({
        right: '1000px'
      })),
      transition('open => closed', [
        animate('55s')
      ]),
      transition('closed => open', [
        animate('55s')
      ]),
    ]),
  ],
  styleUrls: ['./clouds.component.css']
})
export class CloudsComponent implements OnInit {

  isOpen = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.toggle()
    }, 1000);
    const interval2 = window.setInterval(() => {
            this.toggle();
   }, 55000);
  }


  toggle() {
    this.isOpen = !this.isOpen;
  }

}
