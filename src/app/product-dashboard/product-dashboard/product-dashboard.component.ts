import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css'],
})
export class ProductDashboardComponent implements OnInit {
  public salesProducts: any = [
    { id: 1, name: 'ACs', price: 1200 },
    { id: 2, name: 'Phone', price: 1200 },
    { id: 3, name: 'Electronics', price: 1200 },
    { id: 4, name: 'Mobiles', price: 1200 },
  ];

  public topProducts: any = [
    { id: 1, name: 'Phone', price: 1200 },
    { id: 2, name: 'Laptop', price: 2200 },
    { id: 3, name: 'Decor', price: 2000 },
    { id: 4, name: 'Electronics', price: 1900 },
  ];

  constructor() {}

  ngOnInit() {}
}
