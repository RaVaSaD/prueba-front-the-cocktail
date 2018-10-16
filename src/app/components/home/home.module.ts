import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    ModalComponent
  ]
})
export class HomeModule { }
