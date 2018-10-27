import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyAnchorsPage } from './my-anchors.page';

const routes: Routes = [
  {
    path: '',
    component: MyAnchorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyAnchorsPage]
})
export class MyAnchorsPageModule {}
