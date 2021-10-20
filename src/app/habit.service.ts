import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
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

  constructor() {}

  getHabits(): Observable<any> {
    return of(this.habits);
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
