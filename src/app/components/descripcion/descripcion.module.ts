import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionComponent } from './descripcion.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DescripcionComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DescripcionComponent
  ]
})
export class DescripcionModule { }
