import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  template: ` <p>account-detail works!</p>
    <p>Account ID: {{ id }}</p>

    <nav>
      <ul>
        <li><a [routerLink]="['/account', 1]">Account 1</a></li>
        <li><a [routerLink]="['/account', 2]">Account 2</a></li>
        <li><a [routerLink]="['/account', 3]">Account 3</a></li>
      </ul>
    </nav>`,
  styles: [],
})
export class AccountDetailComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.id = ''+this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = '' + params.get('id');
    });
  }
}
