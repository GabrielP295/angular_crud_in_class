import { Injectable } from '@angular/core';
import { Groceries, GroceriesCollection } from '../model/Groceries'

type groceryWithoutId = Omit<Groceries, 'id'>;

@Injectable({
  providedIn: 'root',
})
export class GroceriesDatabase {
  private groceries: GroceriesCollection = [];

  contains(groceryParam: groceryWithoutId) {
    for (const grocery of this.groceries) {
      if (grocery === groceryParam) {
        return grocery;
      }
    }
    return null;
  }

  createGrocery(grocery: groceryWithoutId): Groceries | null{
    if(this.contains(grocery)) {
      return null;
    }

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
}
