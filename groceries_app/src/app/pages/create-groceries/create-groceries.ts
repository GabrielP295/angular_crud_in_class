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
  groceryPrice = '';
  groceryStore = '';

  createGrocery() {
    const newGrocery = this.groceryService.createGrocery(
      this.groceryItem,
      Number(this.groceryPrice),
      this.groceryStore,
    );
    const p = document.getElementById('p');
    p!.textContent += ' ' + this.groceryItem;
    this.groceryItem = '';
    this.groceryPrice = '';
    this.groceryStore = '';
  }
}
