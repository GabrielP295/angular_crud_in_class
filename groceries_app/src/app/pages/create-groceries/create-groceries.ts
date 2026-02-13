import { Component, inject } from '@angular/core';
import { GroceriesDatabase } from '../../services/groceries-database';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-groceries',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './create-groceries.html',
  styleUrl: './create-groceries.scss',
})
export class CreateGroceries {
  groceryService = inject(GroceriesDatabase);

  formGroup: FormGroup = new FormGroup({
    groceryItem: new FormControl(),
    groceryPrice: new FormControl(),
    groceryStore: new FormControl(),
  })

  // groceryItem = '';
  // groceryPrice = '';
  // groceryStore = '';

  groceryConfirmation = '';

  createGrocery() {
    const newGrocery = this.groceryService.createGrocery(
      this.formGroup.get("groceryItem")?.value,
      Number(this.formGroup.get("groceryPrice")?.value),
      this.formGroup.get("groceryStore")?.value,
    );

    this.handleGroceryConfirmation();

    this.resetInputValues();
  }

  handleGroceryConfirmation() {
    this.groceryConfirmation = `Grocery of ${this.formGroup.get("groceryItem")?.value} was added!`;
    setTimeout(() => {
      this.groceryConfirmation = '';
    }, 2000);
  }

  resetInputValues() {
    this.formGroup.reset({
      groceryItem: '',
      groceryPrice: '',
      groceryStore: '',
    })
  }
}
