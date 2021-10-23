import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'habits 1',
      count: 5,
    },
    {
      id: 2,
      title: 'habits 2',
      count: 4,
    },
    {
      id: 3,
      title: 'habits 3',
      count: 6,
    },
  ];

  constructor(private http: HttpClient) {}

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
    //return this.http.get<Habit[]>('http://localhost:3001/api/habits');
    //return this.http.get<Habit[]>('/api/habits');
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
