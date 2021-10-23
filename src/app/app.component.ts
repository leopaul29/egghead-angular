import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Habits tracker';
}
