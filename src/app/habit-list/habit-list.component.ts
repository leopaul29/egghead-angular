import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  template: `
    <p>
      habit-list works!
    </p>
  `,
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
