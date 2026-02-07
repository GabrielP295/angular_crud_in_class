import { Component, inject } from '@angular/core';
import { Db } from '../db';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-read-users',
  imports: [
    RouterLink,
  ],
  templateUrl: './read-users.html',
  styleUrl: './read-users.scss',
})
export class ReadUsers {
  db = inject(Db);

  readAllUsers() {
    return this.db.readAllUser;
  }
  deleteUser(email: string) {
    this.db.deleteUser(email);
  }
}
