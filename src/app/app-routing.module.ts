import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'seiscuatro', loadChildren: './seiscuatro/seiscuatro.module#SeiscuatroPageModule' },
  { path: 'nueveseis', loadChildren: './nueveseis/nueveseis.module#NueveseisPageModule' },
  { path: 'unodoscuatro', loadChildren: './unodoscuatro/unodoscuatro.module#UnodoscuatroPageModule' },
  { path: 'resultadocuatro', loadChildren: './resultadocuatro/resultadocuatro.module#ResultadocuatroPageModule' },
  { path: 'resultadouno/:EPE1/:EPE2/:EPE3/:EVA1/:EVA2/:promedio/:promeEx', loadChildren: './resultadouno/resultadouno.module#ResultadounoPageModule' },
  { path: 'resultadodos/:EPE1/:EPE2/:EPE3/:EVA1/:EVA2/:EX/:promepon/:promedio', loadChildren: './resultadodos/resultadodos.module#ResultadodosPageModule' },
  { path: 'resultadotres', loadChildren: './resultadotres/resultadotres.module#ResultadotresPageModule' },
  { path: 'tresdos', loadChildren: './tresdos/tresdos.module#TresdosPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
