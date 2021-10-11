import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Inventory } from '../inventory-list/inventory-list.component';

export const ADD_ITEM = '[inventory page] add inventory item';
export const ADD_ITEM_SUCCESS = '[inventory page] add inventory item success';
export const ADD_ITEM_FAIL = '[inventory page] add inventory item fail';

export const DELETE_ITEM = '[inventory page] delete inventory item';
export const DELETE_ITEM_SUCCESS =
  '[inventory page] delete inventory item success';
export const DELETE_ITEM_FAIL = '[inventory page] delete inventory item fail';

export const LOAD_ITEMS = '[inventory page] load inventory list';
export const LOAD_ITEMS_SUCCESS =
  '[inventory page] load inventory list success';
export const LOAD_ITEMS_FAIL = '[inventory page] load inventory list fail';

export const LOAD_ITEM = '[inventory page] load inventory item';
export const LOAD_ITEM_SUCCESS = '[inventory page] load inventory item success';
export const LOAD_ITEM_FAIL = '[inventory page] load inventory item fail';

export const addItem = createAction(
  ADD_ITEM,
  props<{ inventoryItem: Inventory }>()
);
export const addItemSuccess = createAction(ADD_ITEM_SUCCESS);
export const addItemFail = createAction(ADD_ITEM_FAIL);

export const loadItems = createAction(LOAD_ITEMS);
export const loadItemsSuccess = createAction(LOAD_ITEMS_SUCCESS, props<{ inventoryItems: Inventory[] }>());
export const loadItemsFail = createAction(LOAD_ITEMS_FAIL);

export const loadItem = createAction(LOAD_ITEM, props<{id: string}>());
export const loadItemSuccess = createAction(LOAD_ITEM_SUCCESS, props<{ inventoryItem: Inventory }>());
export const loadItemFail = createAction(LOAD_ITEM_FAIL);

export const deleteItem = createAction(DELETE_ITEM, props<{id: string}>());
export const deleteItemSuccess = createAction(DELETE_ITEM_SUCCESS);
export const deleteItemFail = createAction(DELETE_ITEM_FAIL);
