import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultadocuatroPage } from './resultadocuatro.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadocuatroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultadocuatroPage]
})
export class ResultadocuatroPageModule {}
