import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUsers } from './create-users/create-users';
import { ReadUsers } from './read-users/read-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateUsers, ReadUsers],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_crud_in_class');
}
