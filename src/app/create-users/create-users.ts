import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Db } from '../db';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-users',
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './create-users.html',
  styleUrl: './create-users.scss',
})
export class CreateUsers {
  // firstName: string = '';
  // lastName: string = '';
  // email: string = '';
  dbService: Db = inject(Db);

  formGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
  })

  addUser() {
    const userToAdd = {
      firstName: this.formGroup.get('firstName')?.value,
      lastName: this.formGroup.get('lastName')?.value,
      email: this.formGroup.get('email')?.value,
    }
    this.dbService.createAndSave(userToAdd.firstName, userToAdd.lastName, userToAdd.email);
    this.resetValues();
  }

  resetValues() {
    this.formGroup.reset({
      firstName: '',
      lastName: '',
      email: '',
    })
  }

  // addUser() {
  //   const results: boolean = this.dbService.createAndSave(
  //     this.firstName, 
  //     this.lastName, 
  //     this.email
  //   );

  //   this.firstName = '';
  //   this.lastName = '';
  //   this.email = '';
  // }
  
}
