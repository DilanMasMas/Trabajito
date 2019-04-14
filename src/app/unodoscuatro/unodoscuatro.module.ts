import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnodoscuatroPage } from './unodoscuatro.page';

const routes: Routes = [
  {
    path: '',
    component: UnodoscuatroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnodoscuatroPage]
})
export class UnodoscuatroPageModule {}
