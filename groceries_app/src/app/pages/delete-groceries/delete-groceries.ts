import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { GroceriesDatabase } from '../../services/groceries-database';

@Component({
  selector: 'app-delete-groceries',
  imports: [RouterLink],
  templateUrl: './delete-groceries.html',
  styleUrl: './delete-groceries.scss',
})
export class DeleteGroceries {
  route = inject(ActivatedRoute);
  router = inject(Router);
  groceryService = inject(GroceriesDatabase);

  deleteGrocery() {
    const id = this.route.snapshot.paramMap.get('id');

    const deletedUser = this.groceryService.deleteGrocery(id!);

    if (deletedUser) this.router.navigate(['/read-groceries']);
  }
}
