import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'Dash', loadChildren: './dash/dash.module#DashPageModule' },
  { path: 'Test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'Daily To Do List', loadChildren: './daily-to-do-list/daily-to-do-list.module#DailyToDoListPageModule' },
  { path: 'To Do This Week', loadChildren: './to-do-this-week/to-do-this-week.module#ToDoThisWeekPageModule' },
  { path: 'To Do This Month', loadChildren: './to-do-this-month/to-do-this-month.module#ToDoThisMonthPageModule' },
  { path: 'My Anchors', loadChildren: './my-anchors/my-anchors.module#MyAnchorsPageModule' },
  { path: 'My Progress', loadChildren: './my-progress/my-progress.module#MyProgressPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
