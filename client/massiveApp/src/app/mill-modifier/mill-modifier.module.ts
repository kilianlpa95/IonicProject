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

import { MillModifierPage } from './mill-modifier.page';

const routes: Routes = [
  {
    path: '',
    component: MillModifierPage
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
  declarations: [MillModifierPage]
})
export class MillModifierPageModule {}
