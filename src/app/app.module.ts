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
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountItemsComponent } from './account-items/account-items.component';

const routes: Routes = [
  { path: 'habits', component: HabitsComponent },
  { path: 'account', component: AccountComponent },
  {
    path: 'account/:id',
    component: AccountDetailComponent,
    children: [
      { path: 'info', component: AccountInfoComponent },
      { path: 'items', component: AccountItemsComponent },
    ],
  },
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
    AccountComponent,
    AccountDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
