import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUsers } from './create-users/create-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateUsers],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_crud_in_class');
}
