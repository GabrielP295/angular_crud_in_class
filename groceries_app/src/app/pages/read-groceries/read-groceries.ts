import { Component, inject } from '@angular/core';
import { GroceriesDatabase } from '../../services/groceries-database';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-read-groceries',
  imports: [RouterLink],
  templateUrl: './read-groceries.html',
  styleUrl: './read-groceries.scss',
})
export class ReadGroceries {
  groceryService = inject(GroceriesDatabase);

  readAllGroceries() {
    return this.groceryService.readAllGroceries();
  }
}
