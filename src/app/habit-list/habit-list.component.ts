import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits!</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item
        *ngFor="let habit of habits"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styleUrls: ['./habit-list.component.css'],
})
export class HabitListComponent implements OnInit {
  habits = [
    {
      id: 1,
      title: 'habits 1',
    },
    {
      id: 2,
      title: 'habits 2',
    },
    {
      id: 3,
      title: 'habits 3',
    },
  ];

  ngOnInit() {}

  onAddHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
