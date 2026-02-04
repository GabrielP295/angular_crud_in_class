import { Component, inject } from '@angular/core';
import { Db } from '../db';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-users',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './update-users.html',
  styleUrl: './update-users.scss',
})
export class UpdateUsers {
  route = inject(ActivatedRoute);
  dbService: Db = inject(Db);

  formGroup = new FormGroup({
    firstName: new FormControl('Gabriel', [Validators.email]),
    lastName: new FormControl('Paniagua'),
    email: new FormControl('gabrielpan295@gmail.com'),
  })

  firstName = '';
  lastName = '';
  email = '';

  //ask why this method has a constructor
  constructor() {
    const email = this.route.snapshot.paramMap.get('email');

    if (!email) return;

    const user = this.dbService.getUserByEmail(email);

    if (!user) return;

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
  }
  
  //ask why this method takes in 3 inputs instead of user object, and how to deal with
  //Partial Omit object being passed into method
  updateUser() {
    this.dbService.updateUser(this.email, this.firstName, this.lastName);
  }
}
