import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Db } from '../db';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-users',
  imports: [
    FormsModule,
    RouterLink,
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
    this.dummyData();

    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }
  dummyData(){
    for (let i = 0; i < 100; i++) {
      this.dbService.createAndSave(
        this.firstName,
        this.lastName,
        `${this.email}${i}`
      );
    }
  }
}
