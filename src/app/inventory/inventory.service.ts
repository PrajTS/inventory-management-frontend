import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './inventory-list/inventory-list.component';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  loadItems(): Observable<{ inventoryItems: Inventory[] }> {
    return this.http.get<{ inventoryItems: Inventory[] }>(`/v1/inventory`);
  }

  loadItem(id: string): Observable<{ inventoryItem: Inventory }> {
    return this.http.get<{ inventoryItem: Inventory }>(`/v1/inventory/${id}`);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete<any>(`/v1/inventory/${id}`);
  }

  addItem(item: Inventory): Observable<any> {
    return this.http.post<any>(`/v1/inventory`, item);
  }
}
