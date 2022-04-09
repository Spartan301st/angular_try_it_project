import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // for importing data from the parent
  @Input() product: Product | undefined;
  // for emmiting an event for parent to receive for communication
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
