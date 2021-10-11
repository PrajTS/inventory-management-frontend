import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InventoryState } from './inventory.state';
export const INVENTORY_STATE_NAME = 'inventory';

const getAuthState = createFeatureSelector<InventoryState>(INVENTORY_STATE_NAME);

export const getInventoryList = createSelector(getAuthState, (state) => {
  return state.inventory?.list;
});

export const getInventoryItem = createSelector(getAuthState, (state) => {
  return state.inventory.currentItem;
});
