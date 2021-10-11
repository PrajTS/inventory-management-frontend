import { AUTH_STATE_NAME } from '../auth/state/auth.selector';
import { SharedState } from './Shared/shared.state';
import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { SharedReducer } from './Shared/shared.reducer';
import { AuthReducer } from '../auth/state/auth.reducer';
import { AuthState } from '../auth/state/auth.state';
import { INVENTORY_STATE_NAME } from '../inventory/state/inventory.selector';
import { InventoryState } from '../inventory/state/inventory.state';
import { InventoryReducer } from '../inventory/state/inventory.reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
  [INVENTORY_STATE_NAME]: InventoryState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
  [INVENTORY_STATE_NAME]: InventoryReducer,
};
