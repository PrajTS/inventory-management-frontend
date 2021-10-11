import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginAuthGuard } from './auth/login-auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { InventoryItemComponent } from './inventory/inventory-item/inventory-item.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: '',
    component: InventoryListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'inventory/add',
    component: AddInventoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'inventory/:id',
    component: InventoryItemComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
