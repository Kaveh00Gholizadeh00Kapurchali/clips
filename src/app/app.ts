import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Nav } from './core/nav/nav';
import { AuthModal } from './user/auth-modal/auth-modal';

@Component({
  imports: [RouterOutlet, Nav, AuthModal],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('clips');
}
