import { Component, inject } from '@angular/core';
import { GroceriesDatabase } from '../../services/groceries-database';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-groceries',
  imports: [FormsModule],
  templateUrl: './create-groceries.html',
  styleUrl: './create-groceries.scss',
})
export class CreateGroceries {
  groceryService = inject(GroceriesDatabase);

  groceryItem = '';
  groceryPrice = 7.50;
  groceryStore = "Tony's Fresh Market";

  createGrocery() {
    const newGrocery = this.groceryService.createGrocery({
      item: this.groceryItem, 
      price: this.groceryPrice, 
      store: this.groceryStore
    })
    this.groceryItem = newGrocery!.item;
    this.groceryPrice = newGrocery!.price;
    this.groceryStore = newGrocery!.store;
  }
}
