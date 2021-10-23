import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  template: ` <p>account-detail works!</p>
    <p>Account ID: {{ id }}</p>
    
    <nav>
      <ul>
        <li><a routerLink="info" class="nav-link" routerLinkActive="active">Info</a></li>
        <li><a routerLink="items" class="nav-link" routerLinkActive="active">Items</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
    `,
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
