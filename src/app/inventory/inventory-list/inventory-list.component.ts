import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadItems } from '../state/inventory.actions';
import { getInventoryList } from '../state/inventory.selector';

export interface Inventory {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity'];
  dataSource: Inventory[] = [];

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadItems());
    this.store.select(getInventoryList).subscribe(data => {
      this.dataSource = data
    })
  }

  view(row: Inventory) {
    this.router.navigate(['inventory', row.id]);
  }
}
