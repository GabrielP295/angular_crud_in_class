import { Component, inject } from '@angular/core';
import { Db } from '../db';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-users',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './update-users.html',
  styleUrl: './update-users.scss',
})
export class UpdateUsers {
  route = inject(ActivatedRoute);
  router = inject(Router)
  dbService: Db = inject(Db);

  formGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
  })

  constructor() {
    const email = this.route.snapshot.paramMap.get('email');

    if (!email) return;

    const user = this.dbService.getUserByEmail(email);

    if (!user) return;

    this.formGroup.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  }
  
  updateUser() {
    const {firstName, lastName, email} = this.formGroup.value;

    if(!email) return;

    const updatedUser = this.dbService.updateUser(email, {firstName, lastName});

    if (updatedUser) this.router.navigate(['/read-users']);
  }
}
