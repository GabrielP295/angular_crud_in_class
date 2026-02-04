import { Injectable } from '@angular/core';

export interface User {
  firstName: string,
  lastName: string,
  email: string,
}

interface UserDb {
  [email: string]: User,
}

@Injectable({
  providedIn: 'root',
})
export class Db {
  private users: UserDb = {};

  createAndSave(firstName: string, lastName: string, email: string): boolean {
    if (this.users[email]) {
      console.error('User with this email already exists:', email);
      return false;
    }

    const userToSave: User = {
      firstName,
      lastName,
      email,
    };

    this.users[email] = userToSave;
    console.log('Current Users in DB:', this.users);
    return true;
  }

  get readAllUser(): User[] {
    return Object.values(this.users);
  }

  getUserByEmail(email: string) {
    return this.users[email];
  }

  deleteUser(email: string): boolean {
    if (!this.users[email]) {
      console.error('No user found with this email:', email);
      return false;
    }
    delete this.users[email];
    return true;
  }

  updateUser(email: string, firstName: string, lastName: string) {
    if (!this.users[email]) {
      console.error('No user found with this email: ', email);
      return;
    }
    this.users[email] = {
      email,
      firstName,
      lastName,
    }

    return this.users[email];
  }
}
