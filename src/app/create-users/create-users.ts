import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Db } from '../db';

@Component({
  selector: 'app-create-users',
  imports: [
    FormsModule
  ],
  templateUrl: './create-users.html',
  styleUrl: './create-users.scss',
})
export class CreateUsers {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  dbService: Db = inject(Db);

  addUser() {
    const results: boolean = this.dbService.createAndSave(
      this.firstName, 
      this.lastName, 
      this.email
    );

    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }
}
