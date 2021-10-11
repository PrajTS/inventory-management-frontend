import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Inventory {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ELEMENT_DATA: Inventory[] = [
  { id: 1, name: 'Hydrogen', price: 10079, quantity: 1 },
  { id: 2, name: 'Helium', price: 40026, quantity: 20 },
  { id: 3, name: 'Lithium', price: 6941, quantity: 30 },
  { id: 4, name: 'Beryllium', price: 90122, quantity: 20 },
  { id: 5, name: 'Boron', price: 10811, quantity: 10 },
  { id: 6, name: 'Carbon', price: 120107, quantity: 3 },
  { id: 7, name: 'Nitrogen', price: 140067, quantity: 5 },
  { id: 8, name: 'Oxygen', price: 159994, quantity: 23 },
  { id: 9, name: 'Fluorine', price: 189984, quantity: 54 },
  { id: 10, name: 'Neon', price: 201797, quantity: 23 },
];

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  view(row: Inventory) {
    this.router.navigate(['inventory', row.id]);
  }
}
