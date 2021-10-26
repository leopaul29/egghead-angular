import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>home works!</p>
    <input type="text" [ngModel]="username" />
  `,
})
export class HomeComponent implements OnInit {
  username = 'John';
  constructor() {}

  ngOnInit(): void {}
}
