import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits!</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item
        *ngFor="let habit of habits | async"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styleUrls: ['./habit-list.component.css'],
})
export class HabitListComponent implements OnInit {
  habits: Observable<any>;

  constructor(private habitService: HabitService) {}

  ngOnInit() {
    // simple way
    //this.habitService.getHabits().subscribe((habits) => (this.habits = habits));

    this.habits = this.habitService.getHabits();
  }

  onAddHabit(newHabit) {
    this.habitService.addHabit(newHabit);
  }
}
