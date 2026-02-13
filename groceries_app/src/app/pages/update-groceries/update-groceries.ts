import { Component, inject, OnInit } from '@angular/core';
import { GroceriesDatabase } from '../../services/groceries-database';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-groceries',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './update-groceries.html',
  styleUrl: './update-groceries.scss',
})
export class UpdateGroceries implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  groceryService = inject(GroceriesDatabase);
  id = this.route.snapshot.paramMap.get('id');

  formGroup = new FormGroup({
    item: new FormControl(),
    price: new FormControl(),
    store: new FormControl(),
  })

  ngOnInit(): void {
    const grocery = this.groceryService.readGroceryById(this.id!);

    if(!grocery) return;

    this.formGroup.setValue({
      item: grocery?.item,
      price: grocery?.price,
      store: grocery?.store,
    })
  }

  editGrocery() {
    let {item, price, store} = this.formGroup.value;

    price = Number(price);

    const updatedUser = this.groceryService.updateGrocery(this.id!, {item, price, store});

    if (updatedUser) this.router.navigate(['/read-groceries']);
  }
}
