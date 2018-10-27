import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DailyToDoListPage } from './daily-to-do-list.page';

const routes: Routes = [
  {
    path: '',
    component: DailyToDoListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DailyToDoListPage]
})
export class DailyToDoListPageModule {}
