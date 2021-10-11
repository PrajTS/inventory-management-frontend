import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss'],
})
export class InventoryItemComponent implements OnInit {
  id: string = '';
  data = {
    id: 1,
    name: 'Hydrogen',
    price: 100,
    quantity: 20,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      (this.id = params.id), console.log(this.id);
    });
  }
}
