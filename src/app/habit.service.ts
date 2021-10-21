import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'habits 1',
      count:5
    },
    {
      id: 2,
      title: 'habits 2',
      count:4
    },
    {
      id: 3,
      title: 'habits 3',
      count:3
    },
  ];

  constructor() {}

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
