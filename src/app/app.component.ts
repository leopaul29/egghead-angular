import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <ul>
      <li><a routerLink="/habits">Habits</a></li>
      <li><a routerLink="/account">Account</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent {
  title = 'Habits tracker';
}
