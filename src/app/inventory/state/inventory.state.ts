import { EntityState } from '@ngrx/entity';
import { Inventory } from '../inventory-list/inventory-list.component';

export interface InventoryState {
  inventory: {
    list: Inventory[];
    currentItem: Inventory | null;
  };
}

export const initialState: InventoryState = {
  inventory: {
    list: [],
    currentItem: null,
  },
};
