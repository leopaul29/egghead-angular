import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habits',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <app-habit-list></app-habit-list>
    </div>
  `,
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class HabitsComponent implements OnInit {
  title = 'Habits tracker';
  constructor() {}

  ngOnInit(): void {}
}
