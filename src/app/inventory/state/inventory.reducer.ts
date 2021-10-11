
import { Action, createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess, loadItemSuccess } from './inventory.actions';
import { initialState, InventoryState } from './inventory.state';

const _inventoryReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, action) => {
    return {
      ...state,
      inventory: {
        ...state.inventory,
        list: action.inventoryItems
      }
    };
  }),
  on(loadItemSuccess, (state, action) => {
    return {
      ...state,
      inventory: {
        ...state.inventory,
        currentItem: action.inventoryItem
      }
    };
  }),
);

export function InventoryReducer(state: InventoryState | undefined, action: Action) {
  return _inventoryReducer(state, action);
}
