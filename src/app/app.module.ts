import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { InventoryItemComponent } from './inventory/inventory-item/inventory-item.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventoryItemComponent,
    InventoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
