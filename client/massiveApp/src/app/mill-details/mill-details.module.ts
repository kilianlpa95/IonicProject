import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

import { IonicModule } from '@ionic/angular';

import { MillDetailsPage } from './mill-details.page';

const routes: Routes = [
  {
    path: '',
    component: MillDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MillDetailsPage]
})
export class MillDetailsPageModule {}
