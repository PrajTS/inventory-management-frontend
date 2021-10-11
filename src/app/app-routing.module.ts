import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { InventoryItemComponent } from './inventory/inventory-item/inventory-item.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: InventoryListComponent,
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
