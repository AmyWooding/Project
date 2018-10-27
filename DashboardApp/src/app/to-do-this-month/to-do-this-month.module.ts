import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToDoThisMonthPage } from './to-do-this-month.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoThisMonthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToDoThisMonthPage]
})
export class ToDoThisMonthPageModule {}
