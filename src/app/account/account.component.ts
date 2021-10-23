import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  template: `
    <p>account works!</p>

    <nav>
      <ul>
        <li><a [routerLink]="['/account', 1]">Account 1</a></li>
        <li><a [routerLink]="['/account', 2]">Account 2</a></li>
        <li><a [routerLink]="['/account', 3]">Account 3</a></li>
      </ul>
    </nav>
  `,
  styles: [],
})
export class AccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
