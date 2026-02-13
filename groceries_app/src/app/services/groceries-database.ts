import { Injectable } from '@angular/core';
import { Groceries, GroceriesCollection } from '../model/Groceries'

type updateParams = Partial<Omit<Groceries, 'id'>>;

@Injectable({
  providedIn: 'root',
})
export class GroceriesDatabase {
  private groceries: GroceriesCollection = [];

  createGrocery(grocery: Groceries): Groceries | null {
    const groceryObject = {
      id: crypto.randomUUID(),
      item: grocery.item,
      price: grocery.price,
      store: grocery.store,
    }

    this.groceries.push(groceryObject);
    console.log(`The grocery ${grocery.item} was added.`);
    return groceryObject;
  }

  readAllGroceries() {
    return this.groceries;
  }

  readGroceryById(groceryId: string): Groceries | null {
    for (const grocery of this.groceries) {
      if (grocery.id === groceryId) {
        return grocery;
      }
    }
    return null;
  }

  readIndexById(groceryId: string) {
    return this.groceries.indexOf(
      this.readGroceryById(groceryId)!
    );
  }

  updateGrocery(groceryId: string, updateParams: Partial<Omit<Groceries, 'id'>>) {
    const groceryToUpdate = this.readGroceryById(groceryId);

    if (!groceryToUpdate) {
      return;
    }

    const updatedGrocery = {
      ...groceryToUpdate,
      updateParams,
    }

    const indexOfGrocery = this.readIndexById(groceryId);
    this.groceries[indexOfGrocery] = updatedGrocery;

    return updatedGrocery;
  }

  deleteGrocery(groceryId: string) {
    const groceryToDelete = this.readGroceryById(groceryId);
    if (!groceryToDelete) {
      console.error("No grocery with this id found");
      return;
    }

    this.groceries.splice(this.readIndexById(groceryId), 1);
    return groceryToDelete;
  }
}
