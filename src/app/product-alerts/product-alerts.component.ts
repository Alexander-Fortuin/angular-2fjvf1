// import { Component, OnInit } from '@angular/core';

// import { Input } from '@angular/core';

// import { Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-product-alerts',
//   templateUrl: './product-alerts.component.html',
//   styleUrls: ['./product-alerts.component.css']
// })
// export class ProductAlertsComponent implements OnInit {

//   @Input() product;
//   @Output() notify = new EventEmitter();

//   constructor() {
    
//    }

//   ngOnInit() {
    
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

}
// <p *ngIf="product.price > 700">
  // <button (click)="notify.emit()">Notify Me</button>
// </p>

// export class ProductAlertsComponent implements OnInit {  
//   @Input() product;
//   constructor() { }
//   ngOnInit() { }
// }

// import { Component, OnInit } from '@angular/core';

// @Component({  
//   selector: 'app-product-alerts',
//   templateUrl: './product-alerts.component.html',  
//   styleUrls: ['./product-alerts.component.css']
//   })
// export class ProductAlertsComponent implements OnInit { 
//     constructor() { }  
    
//     ngOnInit() {  }
    
// }