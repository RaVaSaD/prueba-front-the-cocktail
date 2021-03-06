import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DescriptionComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DescriptionComponent,
  ]
})
export class DescriptionModule { }
