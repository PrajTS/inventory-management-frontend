import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { Inventory } from '../inventory.model';
import { deleteItem, loadItem } from '../state/inventory.actions';
import { getInventoryItem } from '../state/inventory.selector';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss'],
})
export class InventoryItemComponent implements OnInit {
  id: string = '';
  data: Inventory | null = null;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.store.dispatch(loadItem({ id: this.id }));
      this.store.select(getInventoryItem).subscribe((data) => {
        this.data = data;
      });
    });
  }

  delete() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(deleteItem({ id: this.id }));
  }
}
