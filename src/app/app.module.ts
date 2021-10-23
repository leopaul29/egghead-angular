import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitItemComponent } from './habit-item/habit-item.component';
import { HabitFormComponent } from './habit-form/habit-form.component';
import { HabitsComponent } from './habits/habits.component';

const routes: Routes = [
  { path: 'habits', component: HabitsComponent },
  { path: '', redirectTo: '/habits', pathMatch: 'full' },
];
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitItemComponent,
    HabitFormComponent,
    HabitsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
